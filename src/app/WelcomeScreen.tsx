import React, { useEffect } from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, Link } from "expo-router";

export default function WelcomeScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ImageBackground
            source={{ uri: "https://wallpapercave.com/wp/wp9708928.jpg" }}
            style={styles.welcomeScreenImageContainer}
        >

            {/*top logo section*/}
            <Image
                source={{ uri: "https://static.cdnlogo.com/logos/f/60/formula-1-8211-f1.png" }}
                style={styles.welcomeScreenImageLogoItem}
            />

            {/*screen content section*/}
            <View style={styles.welcomeScreenBottomItemContainer}>

                <Text style={styles.welcomeScreenBottomItemText}>The world of F1 at your fingertips</Text>
                <Text style={styles.welcomeScreenBottomSubItemText}>Discover the latest news and highlights</Text>

                {/*button section*/}
                <Link href={"/general/PrivacyPolicyScreen"} style={styles.bottomButtonContentContainer}>
                    <View style={styles.bottomButtonContainer}>
                        <Text style={styles.bottomButtonTextItem}>Get started now</Text>
                    </View>
                </Link>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    welcomeScreenImageContainer: {
        flex: 1,
        backgroundColor: "black",
    },
    welcomeScreenLinearGradient: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    welcomeScreenBottomItemContainer: {
        flex: Platform.OS === "ios" ? 0.89 : 0.95,
        paddingHorizontal: 15,
        paddingVertical: 4,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    welcomeScreenImageLogoItem: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
        bottom: Platform.OS === "ios" ? 0 : 40,
    },
    welcomeScreenBottomItemText: {
        color: "white",
        fontSize: 26,
        fontFamily: "F1BoldMobile",
        textAlign: "center",
        textTransform: "capitalize",
        marginVertical: 10,
    },
    welcomeScreenBottomSubItemText: {
        color: "white",
        fontSize: 14,
        fontFamily: "F1Regular",
        textAlign: "center",
        textTransform: "capitalize",
        marginVertical: 10,
    },
    bottomButtonContentContainer: {
        marginTop: 20,
    },
    bottomButtonContainer: {
        height: 50,
        paddingHorizontal: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "red",
    },
    bottomButtonTextItem: {
        color: "white",
        fontSize: 16,
        fontFamily: "F1Regular",
    },
});