import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, Link } from "expo-router";
import { Entypo } from '@expo/vector-icons';

export default function PrivacyPolicyScreen() {
    const navigation = useNavigation();

    //state handlers
    const [storeInfo, setStoreInfo] = useState(false);
    const [personalInfo, setPersonalInfo] = useState(false);
    const [functionalInfo, setFunctionalInfo] = useState(false);

    const store = () => {
        setStoreInfo(true);
        setPersonalInfo(false);
        setFunctionalInfo(false);
    };
    const personal = () => {
        setStoreInfo(false);
        setPersonalInfo(true);
        setFunctionalInfo(false);
    };
    const functional = () => {
        setStoreInfo(false);
        setPersonalInfo(false);
        setFunctionalInfo(true);
    };

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    //main screen content
    function renderMainScreenContentSection() {
        return (
            <>
                {/*logo section*/}
                <View style={styles.companyLogoSectionContainer}>
                    <Image
                        source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                        style={styles.companyLogoImageItem}
                    />

                    <View style={styles.companyTopInfoContainer}>
                        <Text style={styles.companyTopInfoTextItem}>
                            your choice regarding cookies in this app
                        </Text>
                    </View>
                </View>

                {/*info section*/}
                <View style={styles.companyTopInfoMainContainer}>
                    <Text style={styles.companyTopInfoMainTextItem}>
                        We and <Text style={styles.companyHyperLinkTextItem}>our 19 partners</Text>
                        request your permission to use cookies or related technologies such as web beacons,
                        pixel tags, and Flash objects ("Cookies") to store and access personal data on your
                        computer. This may include the usage of unique identifiers and information about your
                        browsing patterns in order to provide the best possible user experience on this app.
                        Please see the links below for additional information on how we or our partners may
                        use your data.
                    </Text>
                </View>

                {/*dropdown section*/}
                <View style={styles.dropdownInfoContainer}>
                    {/*store section*/}
                    <TouchableOpacity onPress={store} style={styles.dropdownHeaderContainer}>
                        <View style={styles.dropdownHeaderTextContainer}>
                            <Text style={styles.dropdownHeaderTextItem}>
                                Store and/or access information on a device
                            </Text>
                        </View>

                        <View style={styles.dropdownIconContainer}>
                            <Entypo name="chevron-down" size={20} color="white" />
                        </View>
                    </TouchableOpacity>

                    {storeInfo && (
                        <View style={styles.dropdownTextContentContainer}>
                            <Text style={styles.dropdownTextContentItem}>
                                Cookies, device or similar online identifiers (e.g. login-based
                                identifiers, randomly assigned identifiers, network based identifiers,
                                etc.) together with other information (e.g. browser type information,
                                language, screen size, supported technologies, etc.) can be stored or
                                read on your device to recognise it each time it connects to an app or
                                a website, for one or more reasons.
                            </Text>
                        </View>
                    )}

                    {/*personal section*/}
                    <TouchableOpacity onPress={personal} style={styles.dropdownHeaderContainer}>
                        <View style={styles.dropdownHeaderTextContainer}>
                            <Text style={styles.dropdownHeaderTextItem}>
                                Personalised advertising and content, advertising and content measurement,
                                audience research and services development
                            </Text>
                        </View>

                        <View style={styles.dropdownIconContainer}>
                            <Entypo name="chevron-down" size={20} color="white" />
                        </View>
                    </TouchableOpacity>

                    {personalInfo && (
                        <View style={styles.dropdownTextContentContainer}>
                            <Text style={styles.dropdownTextContentItem}>
                                Advertising and content might be tailored to your preferences based on your
                                profile. Your activity on this service may be used to create or update a profile
                                about you in order to provide you with personalised advertising content. The
                                effectiveness of advertising and content can both be measured. Reports can be
                                generated depending on your activity as well as the behaviour of others. Your
                                participation in this service can aid in the development and improvement of
                                products and services.
                            </Text>
                        </View>
                    )}

                    {/*functional section*/}
                    <TouchableOpacity onPress={functional} style={styles.dropdownHeaderContainer}>
                        <View style={styles.dropdownHeaderTextContainer}>
                            <Text style={styles.dropdownHeaderTextItem}>
                                Functional
                            </Text>
                        </View>

                        <View style={styles.dropdownIconContainer}>
                            <Entypo name="chevron-down" size={20} color="white" />
                        </View>
                    </TouchableOpacity>

                    {functionalInfo && (
                        <View style={styles.dropdownTextContentContainer}>
                            <Text style={styles.dropdownTextContentItem}>
                                These SDKs enable us to analyze your use of the App in order to assess and
                                enhance our performance. They may also be used to create a better customer
                                experience on this app.
                            </Text>
                        </View>
                    )}
                </View>

                {/*more info section*/}
                <View style={styles.companyTopInfoMainContainer}>
                    <Text style={styles.companyTopInfoSubTextItem}>
                        Some of <Text style={styles.companyHyperLinkTextItem}>our partners</Text> personal
                        data on the basis of legitimate interests. You have the right to object to such
                        processing at any time. Please select "No, Manage Setting" below to manage your
                        preferences and learn more about the cookies we use.
                    </Text>

                    <Text style={styles.companyTopInfoSubTextItem}>
                        You do not need to consent to view the information on this app, but if you do not
                        consent, some customization of content and advertising will be unavailable. Your
                        selection on this app will only be applied to this app. You may update your options
                        at any time by visiting to the Consent Preferences section of the app.
                    </Text>

                    <Text style={styles.companyTopInfoSubTextItem}>
                        You can learn more about how this app uses Cookies and how your personal data may
                        be processed by managing your settings and reading our <Text style={styles.companyHyperLinkTextItem}>
                            Privacy Policy</Text>.
                    </Text>
                </View>

                {/*button section*/}
                <View style={styles.buttonSectionContainer}>
                    {/*manage button*/}
                    <View style={styles.manageButtonContainer}>
                        <Link href={"/general/ManageSettingsScreen"}>
                            <Text style={styles.buttonTextItem}>Manage Settings</Text>
                        </Link>
                    </View>

                    {/*accept button*/}
                    <View style={styles.acceptButtonContainer}>
                        <Link href={"/general/OnboardingScreen"}>
                            <Text style={styles.buttonTextItem}>Accept All</Text>
                        </Link>
                    </View>
                </View>
            </>
        )
    };

    return (
        <View style={styles.privacyPolicyContainer}>
            {renderMainScreenContentSection()}
        </View>
    )
}

const styles = StyleSheet.create({
    privacyPolicyContainer: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },

    //logo section
    companyLogoSectionContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    companyLogoImageItem: {
        width: 140,
        height: 100,
        resizeMode: "contain",
    },
    companyTopInfoContainer: {
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    companyTopInfoTextItem: {
        color: "white",
        fontSize: 20,
        fontFamily: "F1Regular",
        textTransform: "uppercase",
        textAlign: "center",
    },

    //main info section
    companyTopInfoMainContainer: {
        marginTop: 15,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    companyTopInfoMainTextItem: {
        color: "white",
        fontSize: 10,
        textAlign: "center",
    },
    companyHyperLinkTextItem: {
        color: "red",
        fontSize: 10,
        fontWeight: "600",
    },
    companyTopInfoSubTextItem: {
        color: "white",
        fontSize: 10,
        textAlign: "center",
        marginBottom: 20,
    },

    //dropdown section
    dropdownInfoContainer: {
        height: "auto",
        marginTop: 10,
        paddingHorizontal: 15,
    },
    dropdownHeaderContainer: {
        width: "100%",
        marginVertical: 4,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dropdownHeaderTextContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    dropdownHeaderTextItem: {
        color: "white",
        fontSize: 10,
        fontWeight: "600",
    },
    dropdownIconContainer: {
        width: "20%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    dropdownTextContentContainer: {
        width: "100%",
        marginTop: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "grey"
    },
    dropdownTextContentItem: {
        color: "white",
        fontSize: 10,
        fontWeight: "400",
    },

    //button section
    buttonSectionContainer: {
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    manageButtonContainer: {
        width: "45%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "transparent",
    },
    buttonTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    acceptButtonContainer: {
        width: "45%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "red",
    },
})