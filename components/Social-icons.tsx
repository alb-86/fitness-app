import React from "react";
import { View, Text, Appearance, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Colors } from '@/constants/Colors';

const colorScheme = Appearance.getColorScheme()
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light; 
const footerComp = <Text style={{color:theme.text}}>&#169; 2025. Powered by ALB Media</Text>

export default function SocialIcons() {
    const socialLinks = {
        instagram: "https://www.instagram.com/",
    };
    const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
        const webUrl = "https://www.instagram.com/"
        await Linking.openURL(webUrl)
    }
    };
    
     return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow us on</Text>
        <TouchableOpacity onPress={() => openLink(socialLinks.instagram)} style={styles.icon}>
          <Icon name="instagram" size={30} color="#fff" />
         </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "transparent", 
        paddingBottom:0,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
        fontFamily: 'Kalam-Bold'
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    icon: {
      padding: 10,
      color: "#fff",
  },
    footer: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 0,
        color: '#000',
        fontWeight: 'bold',
    },
})