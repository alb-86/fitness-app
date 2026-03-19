import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(200, "Message must be at least 200 characters"),
});

export default function ContactForm() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    Alert.alert("Thanks for submitting, please allowing 1-3 bussiness days for a representative to get in touch with you ");
  };

    return (
  <View style={styles.section}>
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Controller
        control={control}   
        name="name"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                placeholderTextColor="#fff"
                value={value}
                onChangeText={onChange}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </>
        )}
      />

    <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </>
        )}
      />

    <Controller
        control={control}
        name="message"
        render={({ field: { onChange, value } }) => (
        <>
        <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Your Message"
            placeholderTextColor="#fff"
            multiline
            numberOfLines={4}
            value={value}
            onChangeText={onChange}
        />
            {errors.message && <Text style={styles.error}>{errors.message.message}</Text>}
          </>
        )}
      />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#transparent",
    width: '100%',
   
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Kalam-Bold'
  },

  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 0,
    color: '#fff',
    fontSize: 19,
    marginTop: 10,
    fontFamily: 'Kalam-Bold'
  },

  textarea: {
    height: 120,
    color: '#fff',
  },
    
  error: {
    color: "red",
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Kalam-Bold'
  },
    
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent:'center',
    marginTop: 25,
    width: '100%',
  },

  buttonText: {
    fontSize: 30,
    color: "#000",
    fontFamily: 'Kalam-Bold'
  },

  section: {
    height: '47%',
    }
});
