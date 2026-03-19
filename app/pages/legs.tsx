import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, TouchableOpacity, Modal, ImageBackground } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { Colors } from '@/constants/Colors';
import { Legs } from '@/constants/Legs';
// import MENU_IMAGES from '@/constants/MenuImages';

import arrowIcon from '@/assets/images/arrowIcon.png';  

type RootStackParamList = {
    index: undefined;
    workouts: undefined; 
};

export default function MenuScreen() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    // const navigation = useNavigation();
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false, 
            });
        }, [navigation]);

    const goHome = () => {
        navigation.navigate('workouts');
    };

    const [legs, setLegs] = useState<{ id: number; title: string; description: string; image: any; videoUrl?: string; subtitle: string[]; instructions: string | string[]; }[]>([]);

    useEffect(() => { 
        setLegs(legs);
    })
    
    const [isVisible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{
        id: number; title: string; description: string; image: any; videoUrl?: string; subtitle: string[]; instructions: string | string[];} | null>(null);
    // const [formClicked, setFormClicked] = useState(false);

    const toggleModal = (legs: { id: number; title: string; description: string; image: any; videoUrl?: string; subtitle?: string | string[]; instructions: string | string[]; } | null) => {
        if (legs) {
            setSelectedItem({
                ...legs,
                subtitle: Array.isArray(legs.subtitle) ? legs.subtitle : legs.subtitle ? [legs.subtitle] : [],
            });
        } else {
            setSelectedItem(null);
        }
        setVisible(!!legs);
    };

    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light; 

    const image = require('@/assets/images/menu/armsBg.png');
    
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />
    
    // const headerComp = <Text>Top of List</Text>
    const footerComp = <Text style={{color:theme.text, fontSize:15,fontFamily: 'Kalam-Bold',paddingTop: 10,
    paddingBottom: 10,}}>&#169; 2025. Powered by ALB Media</Text>
    const headerComp = <Text style={styles.textHeader}> Leg Workouts</Text>
    
    return (
        <Container>
             <ImageBackground source={ image } resizeMode= "cover" style= {styles.bgImage}>
                <TouchableOpacity onPress={goHome} style={styles.homeButton}>
                    <Image source={arrowIcon} style={styles.homeIcon} />
                </TouchableOpacity>  
                <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={false} 
                    data={Legs} 
                    keyExtractor={(item) => item.id.toString()} 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    ItemSeparatorComponent={() => separatorComp}
                    ListHeaderComponent={headerComp}
                    ListFooterComponent={footerComp}
                    ListFooterComponentStyle={styles.footerComp}
                    ListEmptyComponent={<Text>Workout Coming Soon</Text>}
                    renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={styles.menuItemTitle}>{item.title}</Text>
                            <Text style={styles.menuItemtext}>{item.description}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <TouchableOpacity key={`menu-item-${item}`} onPress={() => toggleModal(item)}>
                                <Image
                                    source={item.image}
                                    style={styles.menuImage}
                                    />
                            </TouchableOpacity>
                        </View>
                   </View> 
                )}
            /> 
            <Modal
                transparent={true}
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => toggleModal(null)}
            >
         <View style={styles.overlay}>
            <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => toggleModal(null)} style={styles.modalClose}>
                <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
            {selectedItem ? (
                    <>
                <Text style={styles.textHeader}> {selectedItem.title} </Text>
                <Text style={styles.modalTitle}>{selectedItem.videoUrl}</Text>
                {selectedItem.videoUrl && (
                    <View style={styles.videoContainer}>
                        <WebView
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            allowsFullscreenVideo={true} 
                            mediaPlaybackRequiresUserAction={false}
                            allowsInlineMediaPlayback={true}
                            androidLayerType="hardware"
                            source={{ uri: selectedItem.videoUrl }}
                            style={styles.webView}
                        />
                <Text style={styles.textSubtitle}> {selectedItem.subtitle} </Text>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.workoutList}>
                <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={false} 
                    data={selectedItem.instructions}
                    style={styles.insData}
                    keyExtractor={(item, index) => typeof item === 'string' ? item : index.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.modalList}>
                                {'\u2023'} {item}
                            </Text>
                        )}
                    />
                    </View>
            </SafeAreaView>
                    </View>
            )}
                </>
             ) : (
                <Text style={styles.modalContent}>No content available</Text>
                )}     
        </View>
            </View> 
                </Modal>
                </ImageBackground>
        </Container>
    );
}

function createStyles(theme: { text: any; background: any; tint?: string; icon?: string; tabIconDefault?: string; tabIconSelected?: string; }, colorScheme: string | null | undefined) {
    return StyleSheet.create({
    contentContainer: {
        paddingTop: 75,
        paddingBottom: 20,
        paddingHorizontal: 12,
    },
       
    separator: {
        height: 1,
        backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
        width: '0%',
        maxWidth: 300,
        marginHorizontal: 'auto',
        marginBottom:10,
        marginTop: 5,
    }, 

    footerComp: {
        marginHorizontal: 'auto',
    },
    
    textHeader: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 0,
        paddingBottom: 10,
        width: '100%',
        fontFamily: 'Kalam-Bold'
        },
    textSubtitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        width: '70%',
        marginHorizontal: 'auto',
        },
    
    row: {
        flexDirection: 'row-reverse',
        width: '100%',
        maxWidth: 600,
        height: 100,
        marginBottom: 10,
        borderStyle: 'solid',
        borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 'auto',
        padding: 10,
        gap: 10,
    },

    menuTextRow: {
        width: '70%',
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 5,
        flexGrow: 1
    },
    
    menuItemTitle: {
        fontSize: 22,
        textDecorationLine: 'none',
        color: "white",
    },
  
    menuItemtext: {
        color: theme.text,
    },
    
    menuImage: {
        width: 100,
        height:75,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5,
        resizeMode: 'contain',
    },
    
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginTop: 10,
    },
    
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: 100,
        },
    
    bgImage: {
        width: '100%',
        height: '100%',
    },
        
   homeButton: {
        position: 'absolute',
        top: 25,
        left:10,
        zIndex: 10,
        padding: 10,
        },
   
    homeIcon: {
        width: 40,
        height: 25,
        tintColor: 'white', 
        marginLeft:10,
        }, 
    
    modalContent: {
        width: '100%',  
        maxWidth: 600, 
        height: 100, 
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        display:'none',
        },
    
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
        display:'none',
        },
    
    modalText: {
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
        textAlign: 'left',
        padding: 10,
        },
    
    webView: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        padding: 20,
        backgroundColor: 'transparent',
        },
    
    // Modal
    modalContainer: { 
        backgroundColor: 'transparent', 
        padding: 0, 
        borderRadius: 10, 
        alignItems: 'center', 
        width: '100%', 
        height: 'auto', 
        alignSelf: 'center',
        paddingTop: '25%',
        
        },
    
    videoContainer: {
        width: '100%',
        height: 700, 
        margin: 0,
        },
    
    workoutList:{height: 500,},
    modalList:{color: 'white', fontSize: 16, width:'100%',  paddingLeft: 5, margin:5, padding:0,  },
    overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 1)'},
    modalClose: { position: 'absolute', top:40, right: 30, padding: 15, backgroundColor: '', color: 'white', fontSize: 25 },
    modalCloseText: { color: 'white', fontSize: 25, },
    
    insData: {marginTop:10,}
  });
  }


  