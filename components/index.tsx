import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { logout } from '../src/services/authService';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome to FITTRACK 💪</Text> */}

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: 'red', padding: 12, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
