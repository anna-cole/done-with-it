import { CurrentRenderContext } from "@react-navigation/native";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
 
export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background} 
      source={require('../assets/images/background-image.png')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo}source={require('../assets/images/react-logo.png')}/>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  }
})