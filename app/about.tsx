import React  from "react";
import { StyleSheet, View, Text, Appearance, ImageBackground, TouchableOpacity, Image, } from "react-native";
import { useRouter } from "expo-router";
import abImg from "../assets/images/menu/bgImg.png"
import homeIcon from "../assets/images/homeIcon.png";
import Feather from '@expo/vector-icons/Feather';

import * as Font from 'expo-font';

import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";

// Define the RootStackParamList type
type RootStackParamList = {
  index: undefined;
};

export default function AboutScreen() {

const [fontsLoaded, setFontsLoaded] = useState(false);       

  // const navigation = useNavigation();
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const footerComp = (
    <Text style={{ color: theme.text }}>&#169; 2025. Powered by ALB Media.</Text>
  );

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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goHome} style={styles.homeButton}>
        <Image source={homeIcon} style={styles.homeIcon} />
        <Feather name="home" size={40} color="black" />
      </TouchableOpacity>
      <ImageBackground
        source={abImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title_main}>
          Slow Gains is Better Than No Gains
        </Text>
        <Text style={styles.title}>Beginners guide to fitness</Text>
          <Text style={styles.text}>
              Your ultimate beginner’s workout companion! {"\n"}
              Our app is designed for those new to weight training who want to
              build strength, improve their health, and enhance their
              physique—without feeling overwhelmed.
              {"\n"}
              {"\n"}
              We provide easy-to-follow workout plans, step-by-step exercise
              guides, and expert tips to help you start your fitness journey with
              confidence. Whether your goal is to tone up, gain muscle, or boost
              overall wellness, this app makes it simple and effective.
              {"\n"}
              {"\n"}
              Start your transformation today—one rep at a time! 🚀
          </Text>
        <Text style={styles.footer}>{footerComp}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    padding: 0,
    paddingTop:0,
  },

  headertext: {
    fontSize: 34,
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  homeButton: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
    padding: 10,
  },

  homeIcon: {
    width: 40,
    height: 40,
    tintColor: "white",
  },

  title_main: {
    textAlign: "center",
    color: "#ffff",
    fontSize: 80,
    fontWeight: "200",
    marginTop: "20%",
    marginBottom: 0,
    textShadowColor: "#0000",
    fontFamily: 'Kalam-Bold',
  },

  title: {
    textAlign: "center",
    color: "#ffff",
    fontSize: 35,
    fontWeight: "300",
    paddingBottom: 20,
    fontFamily: 'Kalam-Bold',
  },

  text_title: {
    color: "#000",
    textAlign: "center",
    fontSize: 40,
  },

  text: {
    color: "#fff",
    marginTop: 0,
    padding: 10,
    lineHeight: 30,
    textAlign: "center",
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 0,
    fontSize: 22,
    fontFamily: 'Kalam-Bold',
  },

  footer: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 40,
    fontFamily: 'Kalam-Bold',
  },
});
