  import { ScrollView,
    RefreshControl, ImageBackground, Dimensions, Appearance, StyleSheet, Text, Pressable, View, Image
  } from 'react-native';
  import { Link } from 'expo-router';

  import { LinearGradient } from 'expo-linear-gradient';

  import { Colors } from "@/constants/Colors";

  import * as Font from 'expo-font';
  import { useEffect, useState } from 'react';

  import { logout } from '../../src/services/authService';

  import { useVideoPlayer, VideoView } from 'expo-video';

  const VideoBg = require('../../assets/videos/video.mp4') as any;

  const gif1 = require('../../assets/videos/gif_1.gif') as any;

  export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };

    const { width, height } = Dimensions.get('screen');

    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    const videoSource = VideoBg;
    const player = useVideoPlayer(videoSource);

    useEffect(() => {
      logout();
    }, []);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Kalam-Regular': require('../../assets/fonts/Kalam-Regular.ttf'),
        'Kalam-Bold': require('../../assets/fonts/Kalam-Bold.ttf'),
      });
      setFontsLoaded(true);
    })();
    }, []);

  if (!fontsLoaded) return null;

  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const footerComp = (
      <Text style={{ color: theme.text }}>&#169; 2025. Powered by ALB Media.</Text>
    );
    
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={ refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      <View style={styles.container}>
          {/* <Image 
            source={gif1}
            style={{width: '100%', height: '100%' }}
          /> */}
        <View style={styles.videoView}>
          {/* <Video
                source={{ uri: VideoBg }}
                rate={0.8}
                isMuted
                shouldPlay={true}
                isLooping
                style={styles.video}
                resizeMode={ResizeMode.STRETCH}
                useNativeControls={false}
                progressUpdateIntervalMillis={500}
            />  */}
        </View>
        {/* <VideoView style={styles.video} player={player} /> */}
        <ImageBackground
            source={gif1}
            resizeMode='cover'
            style={styles.image}
        >
        <LinearGradient
              colors={['transparent','rgba(50,30,40,0.5)', 'rgba(30,30,30,0.9)']}
              style={{position: 'absolute', width: '100%', height: 900}}
        />
          <Text style = {styles.title_main}>
              Slow Gains is Better Than No Gains
          </Text>
          <Text style = {styles.title}>
              Beginners guide to fitness 
          </Text>
            <Link href="/about" style={{ marginHorizontal: 'auto' }} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>About Us</Text>
              </Pressable>
            </Link> 
            <Link href="/workouts" style={{marginHorizontal: 'auto'}} asChild>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Workouts</Text>
                </Pressable>
            </Link>
            <Link href="/contacts" style={{marginHorizontal: 'auto'}} asChild>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Contact Us</Text>
                </Pressable>
            </Link>
            <Text style={styles.footer}>{footerComp}</Text> 
          </ImageBackground>
        </View>
        
      </ScrollView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column', 
      margin: 0,
      padding: 0,
      paddingTop:0,
    },
    
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000', 
    },
    
    videoView: {
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      alignSelf: 'center',
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
    },
    
    text: {
      color: '#ffff',
      fontSize: 42,
      fontWeight: 'bold',  
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 990,
      flex: 1,
      justifyContent: 'center',
    },
    title_main: {
      textAlign: 'center',
      color: '#ffff',
      fontSize: 75,
      marginBottom: 30,
      fontFamily: 'Kalam-Bold'
    },
    title: {
      textAlign: 'center',
      color: '#ffff',
      fontSize: 40,
      marginBottom: '20%',
      fontFamily: 'Kalam-Bold'
    },
    button: {
      backgroundColor: '#D9D9D9',
      margin: 20,
      borderRadius: 30,
      width: 375,
      height: 70,
    },
    buttonText: {
      color: '#00000',
      padding: 20,
      textAlign: 'center',
      fontSize: 42,
      textTransform: 'uppercase',  
      fontFamily: 'Kalam-Bold'
    },
    footer: {
      fontSize: 17,
      textAlign: "center",
      marginTop: "10%",
      marginBottom: '10%',
      margin:10,
      fontFamily: 'Kalam-Bold',
    },
  });
