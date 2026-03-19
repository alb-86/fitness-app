import React from 'react';
import { ImageBackground, Appearance, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import bgImg from '@/assets/images/menu/wpBg.png';
// import homeIcon from '@/assets/images/homeIcon.png';  
import Feather from '@expo/vector-icons/Feather';

import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from "@/constants/Colors";
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';





export default function HomeScreen() {
    // const navigation = useNavigation<{ navigate: (screen: 'index') => void }>();
    const router = useRouter();
    const goHome = () => {
        router.push('./');
    };
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
      (async () => {
        await Font.loadAsync({
          'Kalam-Regular': require('../assets/fonts/Kalam-Regular.ttf'),
          'Kalam-Bold': require('../assets/fonts/Kalam-Bold.ttf'),
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
     <View style={styles.container}>
    <ScrollView
      scrollEnabled={false}
      nestedScrollEnabled={false} 
    >
    <TouchableOpacity onPress={goHome} style={styles.homeButton}>
          {/* <Image source={homeIcon} style={styles.homeIcon} /> */}
          <Feather name="home" size={40} color="white" />
    </TouchableOpacity>
    <ImageBackground
          source={bgImg}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient
            colors={['transparent','rgba(0,0,0,0.7)', 'rgba(0,30,40,0.9)']}
            style={{position: 'absolute', width: '100%', height: '100%'}}
          />
         <View>
      <Text style = {styles.title_main}>
          Slow Gains is Better Than No Gains
      </Text>
      <Text style = {styles.title}>
          Beginners guide to fitness 
      </Text>
          <Link href="/pages/chest" style={{ marginHorizontal: 'auto' }} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Chest Workouts</Text>
            </Pressable>
        </Link> 
        <Link href="/pages/back" style={{marginHorizontal: 'auto'}} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Back Workouts</Text>
            </Pressable>
        </Link>
        <Link href="/pages/arms" style={{marginHorizontal: 'auto'}} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Arm Workouts</Text>
            </Pressable>
              </Link>
              <Link href="/pages/shoulders" style={{marginHorizontal: 'auto'}} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Shoulder Workouts</Text>
            </Pressable>
              </Link>
              <Link href="/pages/legs" style={{marginHorizontal: 'auto'}} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Leg Workouts</Text>
          </Pressable>
        </Link>
        <Link href="/pages/cardio-and-core" style={{marginHorizontal: 'auto'}} asChild >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Cardio & Core Workouts</Text>
          </Pressable>
          </Link>
             </View>
             <Text style={styles.footer}>{footerComp}</Text>
        </ImageBackground>
        
      </ScrollView>
              
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 0,
    padding: 0,
  },
  
  
  text: {
    color: '#ffff',
    fontSize: 42,
    fontWeight: 'bold',  
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 960,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title_main: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 80,
    fontWeight:'200',
    marginBottom: 10,
    marginTop: '5%',
    textShadowColor: '#0000',
    fontFamily: 'Kalam-Bold'
  },
  title: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 35,
    marginBottom: 20,
    fontWeight: '300',
    fontFamily: 'Kalam-Bold'
  },
  button: {
    backgroundColor: '#D9D9D9',
    margin: 12,
    borderRadius: 20,
    width: 350,
    height: 50,    
  },
  buttonText: {
    color: '#00000',
    padding: 15,
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase',  
    fontFamily: 'Kalam-Bold'
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    },
  homeButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
    padding: 10,
    },
  homeIcon: {
    width: 40,
    height: 40,
    tintColor: 'white', 
  },
  footer: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    fontFamily: 'Kalam-Bold',
  },
});
