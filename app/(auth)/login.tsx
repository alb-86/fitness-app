import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { signIn } from '../../src/services/authService';
import { authenticateWithBiometrics } from '../../src/services/biometricService';


// import { router } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async () => {
      if (email || !password) {
          Alert.alert('Error', 'Please enter your email and password.');
          return;
      }
      
      try {
          await signIn(email, password);
      } catch (error: any) {
          Alert.alert('Login Error', error.message);
      }
  };
    
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Login</Text>
      <Text style={styles.title}>Fitness App</Text>

      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
          />
          
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send Secure Code</Text>
          </TouchableOpacity>
          
<TouchableOpacity
    style={[styles.button, { backgroundColor: '#333', marginTop: 10 }]}
        onPress={async () => {
            const success = await authenticateWithBiometrics();
            if (success) {
            Alert.alert('Authenticated', 'Biometric success');
            } else {
            Alert.alert('Failed', 'Biometric authentication failed');
            }
        }}
    >
<Text style={styles.buttonText}>Login with Face ID / Fingerprint</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ff99',
    textAlign: 'center',
  },
  subtitle: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#00ff99',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#00ff99',
  },
});
