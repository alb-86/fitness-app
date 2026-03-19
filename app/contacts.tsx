import {StyleSheet,View,Text,Appearance,ImageBackground,TouchableOpacity,Image,} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import CCBg from "../assets/images/menu/aboutImg.png"
import homeIcon from "../assets/images/homeIcon.png"
import Feather from '@expo/vector-icons/Feather';

import Form from "../components/Form"
import SocialIcons from "@/components/Social-icons";
import { Colors } from "@/constants/Colors";

type RootStackParamList = {
  index: undefined;
};

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
const footerComp = (
  <Text style={{ color: theme.text }}>&#169; 2025. Powered by ALB Media.</Text>
);

const Contact = () => {
  const router = useRouter();
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const navigation = useNavigation();

  const goHome = () => {
    router.push("/")
    // navigation.navigate("index");
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goHome} style={styles.homeButton}>
        <Image source={homeIcon} style={styles.homeIcon} />
        <Feather name="home" size={40} color="black" />
      </TouchableOpacity>
      <ImageBackground source={CCBg} resizeMode="cover" style={styles.image}>
        <Text style={styles.title_main}>
          Slow Gains is Better Than No Gains
        </Text>
        <Text style={styles.title}>Beginners guide to fitness</Text>
        <Form />
        <SocialIcons />
        <Text style={styles.footer}>{footerComp}</Text>
      </ImageBackground>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    padding: 0,
    paddingTop:20,
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
    marginBottom: 10,
    textShadowColor: "#0000",
    fontFamily: 'Kalam-Bold'
  },
  title: {
    textAlign: "center",
    color: "#ffff",
    fontSize: 35,
    fontWeight: "300",
    fontFamily: 'Kalam-Bold'
  },
  text_title: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 40,
  },
  link: {
    textDecorationLine: "underline",
  },
  footer: {
    fontSize: 17,
    textAlign: "center",
    color: "#000",
    fontFamily: 'Kalam-Bold'
  },
});
