import { ImageBackground, StyleSheet, Text, View } from "react-native"; 

export default function Index() {
  return (
    <View
      style={styles.container}
    >
    <ImageBackground source={require("../assets/images/forest.jpg")} style={styles.image} >
    <Text style={styles.text}>Home</Text>
  </ImageBackground>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
