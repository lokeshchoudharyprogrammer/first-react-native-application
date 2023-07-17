import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';
import UserData from './Components/UserData';
import InputData from './Components/InputData';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcolor}>Lokesh</Text>
      <StatusBar style="auto" />
      <Text>hello</Text>
      {/* <Welcome yes={"yes Im React native App"} /> */}
      <UserData />
      <InputData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcolor: {
    color: "blue"
  }
});
