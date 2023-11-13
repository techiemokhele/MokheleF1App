import React, { useEffect } from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ImageBackground
            blurRadius={0}
            source={{ uri: "https://e0.pxfuel.com/wallpapers/1004/18/desktop-wallpaper-leclerc-ferrari-racing-f1.jpg" }}
            style={styles.onboardingScreenContainer}
        >
            {/*logo section*/}
            <View style={styles.companyLogosSectionContainer}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/F1_%28white%29.svg/2560px-F1_%28white%29.svg.png" }}
                    style={styles.companyLogosImageItem}
                />
            </View>

            {/*screen content section*/}
            <View style={styles.onboardingScreenFormSectionContainer}>
                {/*welcome text section*/}
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeTextItem}>Welcome to the action</Text>
                </View>

                {/*info text section*/}
                <View style={styles.welcomeInfoTextContainer}>
                    <Text style={styles.welcomeInfoTextItem}>
                        Keep up with the Mokhele F1 App. Get the latest news and results.
                        Create a Mokhele F1 account to have access to free expert features
                        such as live timing on MokheleF1.com
                    </Text>
                </View>

                {/*sign-in text section*/}
                <View style={styles.welcomeLogTextContainer}>
                    <Text style={styles.welcomeLogTextItem}>Already have an account? </Text>
                    <Text style={styles.welcomeActionTextItem}>Sign in</Text>
                </View>

                {/*button section*/}
                <TouchableOpacity onPress={() => console.log("create button pressed")}
                    style={styles.bottomsButtonContentContainer}
                >
                    <View style={styles.bottomsButtonContainer}>
                        <Text style={styles.bottomsButtonTextItem}>create your account</Text>
                    </View>
                </TouchableOpacity>

                {/*not now text section*/}
                <View style={styles.welcomeLogTextContainer} >
                    <Link href={"/appScreens"}>
                        <Text style={styles.welcomeActionTextItem}>Not now</Text>
                    </Link>
                </View>
            </View>

            {/*overlay section*/}
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,1)"]}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    onboardingScreenContainer: {
        flex: 1,
    },

    //logo section
    companyLogosSectionContainer: {
        marginTop: Platform.OS === "ios" ? 30 : -16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    companyLogosImageItem: {
        width: 140,
        height: 100,
        resizeMode: "contain",
    },

    //welcome section
    onboardingScreenFormSectionContainer: {
        zIndex: 99,
    },
    welcomeTextContainer: {
        marginTop: "75%",
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeTextItem: {
        color: "white",
        fontSize: 26,
        fontFamily: "F1BoldMobile",
    },

    //welcome info section
    welcomeInfoTextContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 23,
    },
    welcomeInfoTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 23,
        textAlign: "center",
    },

    //welcome log section
    welcomeLogTextContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    welcomeLogTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 23,
        textAlign: "center",
    },
    welcomeActionTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        textDecorationLine: "underline",
        left: 10,
    },

    //create account button section
    bottomsButtonContentContainer: {
        marginTop: 85,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomsButtonContainer: {
        height: 50,
        width: "90%",
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "red",
    },
    bottomsButtonTextItem: {
        color: "white",
        fontSize: 16,
        fontWeight: "400",
        textTransform: "uppercase",
    },
});