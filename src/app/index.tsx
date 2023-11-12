import React, { useEffect, useCallback } from "react";
import { ImageBackground, StyleSheet,StatusBar, Text, View, SafeAreaView, Image } from 'react-native';
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    F1Black: require("../../assets/fonts/Formula1-Black.ttf"),
    F1BoldWeb: require("../../assets/fonts/Formula1-Bold_web.ttf"),
    F1BoldMobile: require("../../assets/fonts/Formula1-Bold-4.ttf"),
    F1Italic: require("../../assets/fonts/Formula1-Italic.ttf"),
    F1Regular: require("../../assets/fonts/Formula1-Regular-1.ttf"),
    F1Wide: require("../../assets/fonts/Formula1-Wide.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync(); 
    }

    setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 5000); 
  }, [fontsLoaded, fontError, navigation]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

    useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView} style={styles.splashScreenContentContainer}
    >
      <StatusBar hidden />
      <ImageBackground
        blurRadius={3}
        source={{ uri: "https://img.freepik.com/premium-photo/f1-driver-waiting-race-begin-formula-1-poster-concept-generative-ai_117038-4285.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais" }}
        style={styles.splashScreenImageContainer}
      >
        <View style={styles.splashScreenImageLogoContainer}>
          <Image source={{ uri: "https://static.cdnlogo.com/logos/f/60/formula-1-8211-f1.png" }} style={styles.splashScreenImageLogoItem} />
        </View>

      <LinearGradient
        colors={["transparent","rgba(254, 0, 0, 0.19)"]}
        style={styles.splashScreenLinearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        />
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreenContentContainer: {
    flex: 1,
  },
  splashScreenImageContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreenImageLogoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreenImageLogoItem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  splashScreenLinearGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
