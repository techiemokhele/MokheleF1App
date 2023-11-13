import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Platform, ScrollView, Switch, TextInput } from 'react-native';
import { useNavigation, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, EvilIcons } from "@expo/vector-icons";

export default function ManageSettingsScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    //state handler
    const [purpose, setPurpose] = useState(true);
    const [feature, setFeature] = useState(false);
    const [partner, setPartner] = useState(false);
    const [consentUser, setConsentUser] = useState(true);
    const [legitimateUser, setLegitimateUser] = useState(false);
    const [consentPartner, setConsentPartner] = useState(true);
    const [legitimatePartner, setLegitimatePartner] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnable, setIsEnable] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const purposes = () => {
        setPurpose(true);
        setFeature(false);
        setPartner(false);
    };
    const features = () => {
        setPurpose(false);
        setFeature(true);
        setPartner(false);
    };
    const partners = () => {
        setPurpose(false);
        setFeature(false);
        setPartner(true);
    };
    const consent = () => {
        setConsentUser(true);
        setLegitimateUser(false);
    };
    const legitimate = () => {
        setConsentUser(false);
        setLegitimateUser(true);
    };

    const consentPart = () => {
        setConsentPartner(true);
        setLegitimatePartner(false);
    };
    const legitimatePart = () => {
        setConsentPartner(false);
        setLegitimatePartner(true);
    };

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchs = () => setIsEnable(previousState => !previousState);

    return (
        <View style={styles.manageSettingsMainContainer}>
            {/*logo & header section*/}
            <View style={styles.companyLogosSectionContainer}>
                <Image
                    source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                    style={styles.companyLogosImageItem}
                />

                <View style={styles.companyTopsInfoContainer}>
                    <Text style={styles.companyTopsInfoTextItem}>
                        Manage Your Choices
                    </Text>
                </View>


                {/*info section*/}
                <View style={styles.companyTopsInfoMainContainer}>
                    <Text style={styles.companyTopsInfoMainTextItem}>
                        This data is used to improve the performance and experience of app site users.
                        This includes better search results, more relevant content and promotional
                        material, increased communication, and improved app performance.
                    </Text>
                </View>

                {/*button section*/}
                <View style={styles.buttonsSectionContainer}>
                    {/*manage button*/}
                    <View style={styles.managesButtonContainer}>
                        <Link href={"/general/OnboardingScreen"}>
                            <Text style={styles.buttonsTextItem}>Reject all</Text>
                        </Link>
                    </View>

                    {/*accept button*/}
                    <View style={styles.acceptsButtonContainer}>
                        <Link href={"/general/OnboardingScreen"}>
                            <Text style={styles.buttonsTextItem}>Accept All</Text>
                        </Link>
                    </View>
                </View>
            </View>

            {/*middle option section*/}
            <View style={styles.middleOptionsSectionContainer}>
                {/*navigation section*/}
                <View style={styles.middleOptionPressableContentContainer}>
                    {/*purpose content*/}
                    <TouchableOpacity
                        onPress={purposes}
                        style={styles.middleOptionContentContainer}
                    >
                        <Text
                            style={[styles.middleOptionContentTextItem, { color: purpose ? "red" : "white" }]}
                        >
                            Purposes
                        </Text>
                    </TouchableOpacity>

                    {/*features content*/}
                    <TouchableOpacity
                        onPress={features}
                        style={styles.middleOptionContentContainer}
                    >
                        <Text
                            style={[styles.middleOptionContentTextItem, { color: feature ? "red" : "white" }]}
                        >
                            Features
                        </Text>
                    </TouchableOpacity>

                    {/*partners content*/}
                    <TouchableOpacity
                        onPress={partners}
                        style={styles.middleOptionContentContainer}
                    >
                        <Text
                            style={[styles.middleOptionContentTextItem, { color: partner ? "red" : "white" }]}
                        >
                            Partners
                        </Text>
                    </TouchableOpacity>
                </View>

                {/*pointer focus section*/}
                <View style={[styles.focusPointerItem, {
                    left: purpose ? 0 : feature ? "27.6%" : partner ? "55%" : null
                }]}
                />

                {/*toggle section*/}
                {feature ? null : <View style={styles.toggleOptionContainer}>
                    <View style={styles.toggleOptionContentContainer}>

                        {purpose ? <>
                            <TouchableOpacity
                                onPress={consent}
                                style={[styles.toggleOptionItemContainer, { backgroundColor: consentUser ? "white" : "transparent" }]}
                            >
                                <Text style={styles.toggleOptionTextItem}>User consent</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={legitimate}
                                style={[styles.toggleOptionItemContainer, { backgroundColor: legitimateUser ? "white" : "transparent" }]}
                            >
                                <Text style={styles.toggleOptionTextItem}>Legitimate Interest</Text>
                            </TouchableOpacity>
                        </> : partner ? <>
                            <TouchableOpacity
                                onPress={consentPart}
                                style={[styles.toggleOptionItemContainer, { backgroundColor: consentPartner ? "white" : "transparent" }]}
                            >
                                <Text style={styles.toggleOptionTextItem}>User consent</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={legitimatePart}
                                style={[styles.toggleOptionItemContainer, { backgroundColor: legitimatePartner ? "white" : "transparent" }]}
                            >
                                <Text style={styles.toggleOptionTextItem}>Legitimate Interest</Text>
                            </TouchableOpacity>
                        </> : null}
                    </View>
                </View>}

                {/*content section*/}
                <View style={styles.infoContentSectionContainer}>
                    {purpose ?
                        <ScrollView showsVerticalScrollIndicator={false}
                            style={styles.infoContentTextContainer}
                        >
                            <Text style={styles.infoContentHeaderTextItem}>
                                Purposes
                            </Text>

                            <Text style={styles.infoContentItemTextItem}>
                                You take an affirmative decision to allow us to use your data for this reason.
                            </Text>

                            <Text style={styles.infoContentItemsTextItem}>
                                *Custom Purposes
                            </Text>


                            {legitimateUser ? null : <>
                                {/*store item section*/}
                                <View style={styles.infoDropdownSection}>
                                    <View style={styles.infoDropdownContentSection}>
                                        <Entypo name="chevron-down" size={24} color="white" />
                                        <Text style={styles.infoDropdownContentTextItem}>
                                            Store and/or access information on a device
                                        </Text>
                                    </View>

                                    <View style={styles.infoDropdownSwitchSection}>
                                        <Switch
                                            trackColor={{ false: "grey", true: "darkgreen" }}
                                            thumbColor={"white"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                        />
                                    </View>
                                </View>

                                {/*personal item section*/}
                                <View style={styles.infoDropdownSection}>
                                    <View style={styles.infoDropdownContentSection}>
                                        <Entypo name="chevron-down" size={24} color="white" />
                                        <Text style={styles.infoDropdownContentTextItem}>
                                            Personalised advertising and content, advertising and content
                                            management, audience research and services development
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.infoDropdownContentStatusContainer}>
                                    <Text style={styles.infoDropdownContentTextItem}>
                                        Status: <Text style={styles.infoDropdownContentStatusTextItem}>accept all</Text>
                                    </Text>

                                    <View style={styles.buttonsSectionsContainer}>
                                        {/*manage button*/}
                                        <View style={styles.managesButtonsContainer}>
                                            <Link href={"/general/OnboardingScreen"}>
                                                <Text style={styles.buttonsTextItem}>Reject all</Text>
                                            </Link>
                                        </View>

                                        {/*accept button*/}
                                        <View style={styles.acceptsButtonsContainer}>
                                            <Link href={"/general/OnboardingScreen"}>
                                                <Text style={styles.buttonsTextsRedItem}>Accept All</Text>
                                            </Link>
                                        </View>
                                    </View>
                                </View>
                            </>}

                            {/*function item section*/}
                            <View style={styles.infoDropdownSection}>
                                <View style={styles.infoDropdownContentSection}>
                                    <Entypo name="chevron-down" size={24} color="white" />
                                    <Text style={styles.infoDropdownContentTextItem}>
                                        *Functional
                                    </Text>
                                </View>

                                <View style={styles.infoDropdownSwitchSection}>
                                    <Switch
                                        trackColor={{ false: "grey", true: "darkgreen" }}
                                        thumbColor={"white"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitchs}
                                        value={isEnable}
                                    />
                                </View>
                            </View>

                            {/*spacial purpose item section*/}
                            <View style={styles.infoDropdownSection}>
                                <View style={styles.infoDropdownContentStatusContainer}>
                                    <Text style={styles.infoContentHeaderTextItem}>
                                        Special Purposes
                                    </Text>

                                    <Text style={styles.infoContentItemTextItem}>
                                        We need to utilise your data for this processing purpose in order to provide you with services.
                                    </Text>
                                </View>
                            </View>

                            {/*security item section*/}
                            <View style={styles.infoDropdownSection}>
                                <View style={styles.infoDropdownContentsSection}>
                                    <Entypo name="chevron-down" size={24} color="white" />
                                    <Text style={styles.infoDropdownContentTextItem}>
                                        Ensure security, prevent and detect fraud, and fix errors
                                    </Text>
                                </View>
                            </View>

                            {/*deliver item section*/}
                            <View style={styles.infoDropdownSection}>
                                <View style={styles.infoDropdownContentsSection}>
                                    <Entypo name="chevron-down" size={24} color="white" />
                                    <Text style={styles.infoDropdownContentTextItem}>
                                        Deliver and present advertising and content
                                    </Text>
                                </View>
                            </View>

                            {/*required item section*/}
                            <View style={styles.infoDropdownSection}>
                                <View style={styles.infoDropdownContentsSection}>
                                    <Entypo name="chevron-down" size={24} color="white" />
                                    <Text style={styles.infoDropdownContentTextItem}>
                                        *Required
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                        : feature ?
                            <View style={styles.infoContentsTextContainer}>
                                <Text style={styles.infoContentHeaderTextItem}>
                                    Features
                                </Text>

                                <Text style={styles.infoContentItemTextItem}>
                                    Features are applications of data that you have previously consented to share with us.
                                </Text>

                                {/*match item section*/}
                                <View style={styles.infoDropdownSection}>
                                    <View style={styles.infoDropdownContentsSection}>
                                        <Entypo name="chevron-down" size={24} color="white" />
                                        <Text style={styles.infoDropdownContentTextItem}>
                                            Match and combine data from other data sources
                                        </Text>
                                    </View>
                                </View>

                                {/*link item section*/}
                                <View style={styles.infoDropdownSection}>
                                    <View style={styles.infoDropdownContentsSection}>
                                        <Entypo name="chevron-down" size={24} color="white" />
                                        <Text style={styles.infoDropdownContentTextItem}>
                                            Link different devices
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            : partner ? <ScrollView showsVerticalScrollIndicator={false}
                                style={styles.infoContentTextContainer}
                            >
                                <View style={styles.searchContainer}>
                                    <View style={styles.searchContentContainer}>
                                        <View style={styles.searchContentIconContainer}>
                                            <EvilIcons name="search" size={24} color="grey" />
                                        </View>

                                        <View style={styles.searchContentTextContainer}>
                                            <TextInput
                                                value={inputValue}
                                                onChangeText={(inputValue) => setInputValue(inputValue)}
                                                placeholder={"Search App Partners..."}
                                                placeholderTextColor={"grey"}
                                                style={styles.inputSearch}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.searchLiner} />
                                </View>

                                <View style={styles.infoContentItemContentItem}>
                                    <View style={styles.infoContentItemContentContainer}>
                                        <Text style={styles.infoContentItemTextItem}>
                                            {consentPartner ? 6 : 13} Vendor(s)
                                        </Text>
                                    </View>

                                    <View style={styles.infoContentItemContentsContainer}>
                                        <Text style={styles.infoContentItemTextItem}>
                                            * Other App Partners
                                        </Text>
                                    </View>
                                </View>

                                {consentPartner ? <>
                                    {/*google item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google Advertising Products
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*charbeat item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Chartbeat, Inc.*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*analytics item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google Analytics*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*instagram item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Instagran, Inc*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*new relic item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                New Relic
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*tiktok item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                TikTok*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </> : legitimatePartner ? <>
                                    {/*firebase item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Firebase *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*performance item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Firebase Performance *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*remote item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google Firebase Remote Config*
                                            </Text>
                                        </View>
                                    </View>

                                    {/*mobile item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google Mobile Services*
                                            </Text>
                                        </View>
                                    </View>

                                    {/*tag item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google Tag Manager *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*google item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Google, Inc. *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*sfmc item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Salesforce Marketing Cloud (SFMC) *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*unity item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Unity *
                                            </Text>
                                        </View>
                                    </View>

                                    {/*brightcove item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Brightcove, Inc.*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*sales item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Salesforce Marketing Cloud Event*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*xcorp item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                X Corp*
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*youtube item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                YouTube Video *
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>

                                    {/*tiktok item section*/}
                                    <View style={styles.infoDropdownSection}>
                                        <View style={styles.infoDropdownContentSection}>
                                            <Entypo name="chevron-down" size={24} color="white" />
                                            <Text style={styles.infoDropdownContentTextItem}>
                                                Mokhele F1 Digital Media Limited - Personalisation *
                                            </Text>
                                        </View>

                                        <View style={styles.infoDropdownSwitchSection}>
                                            <Switch
                                                trackColor={{ false: "grey", true: "darkgreen" }}
                                                thumbColor={"white"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </> : null}
                            </ScrollView> : null}
                </View>
            </View>

            {/*bottom button section*/}
            <View style={purpose || partner ? styles.buttonsSectionsContainers : styles.buttonsSectionContainer}>
                {/*cancel button*/}
                <View style={styles.managesButtonContainer}>
                    <Link href={"/general/OnboardingScreen"}>
                        <Text style={styles.buttonsTextItem}>cancel</Text>
                    </Link>
                </View>

                {/*save button*/}
                <View style={styles.managesButtonContainer}>
                    <Link href={"/general/OnboardingScreen"}>
                        <Text style={styles.buttonsTextItem}>save & exit</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    manageSettingsMainContainer: {
        flex: 1,
        backgroundColor: "#000",
    },

    //logo section
    companyLogosSectionContainer: {
        marginTop: Platform.OS === "ios" ? "6%" : 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    companyLogosImageItem: {
        width: 140,
        height: 90,
        resizeMode: "contain",
    },
    companyTopsInfoContainer: {
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    companyTopsInfoTextItem: {
        color: "white",
        fontSize: 20,
        fontFamily: "F1Regular",
        textTransform: "uppercase",
        textAlign: "center",
    },

    //main info section
    companyTopsInfoMainContainer: {
        marginTop: 15,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    companyTopsInfoMainTextItem: {
        color: "white",
        fontSize: 10,
        textAlign: "center",
    },

    //middle section content
    middleOptionsSectionContainer: {
        marginTop: 20,
        flexDirection: "column",
    },
    middleOptionPressableContentContainer: {
        width: "100%",
        flexDirection: "row",
    },
    middleOptionContentContainer: {
        width: "auto",
        marginTop: 2,
        marginHorizontal: Platform.OS === "ios" ? 22 : 19,
        justifyContent: "center",
        alignItems: "center",
    },
    middleOptionContentTextItem: {
        fontSize: 14,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    focusPointerItem: {
        width: 40,
        height: 2,
        backgroundColor: "red",
        marginVertical: 10,
        marginHorizontal: Platform.OS === "ios" ? 22 : 19,
    },

    //toggle option container
    toggleOptionContainer: {
        width: "90%",
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "grey",
        borderRadius: 10,
        overflow: "hidden",
    },
    toggleOptionContentContainer: {
        width: "100%",
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    toggleOptionItemContainer: {
        maxWidth: "100%",
        height: 40,
        paddingHorizontal: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
    },
    toggleOptionTextItem: {
        color: "black",
        fontSize: 12,
        fontWeight: "600",
        textTransform: "capitalize",
    },

    //info content section
    infoContentSectionContainer: {
        flexDirection: "column",
    },
    infoContentTextContainer: {
        marginTop: 5,
        height: Platform.OS === "ios" ? "61%" : "55.5%",
        paddingHorizontal: 20,
    },
    infoContentsTextContainer: {
        marginTop: 5,
        height: "50%",
        paddingHorizontal: 20,
    },
    infoContentHeaderTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 15,
    },
    infoContentItemTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 20,
        opacity: 0.5,
    },
    infoContentItemContentItem: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoContentItemContentContainer: {
        width: "45%",
    },
    infoContentItemContentsContainer: {
        width: "45%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    infoContentItemsTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
        opacity: 0.7,
    },
    infoDropdownSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoDropdownContentSection: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    infoDropdownContentTextItem: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    infoDropdownSwitchSection: {
        width: "30%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    infoDropdownContentStatusContainer: {
        flexDirection: "column",
        paddingHorizontal: 25,
    },
    infoDropdownContentStatusTextItem: {
        color: "darkgreen",
        fontSize: 12,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    buttonsSectionsContainer: {
        width: "100%",
        marginTop: 15,
        marginBottom: 10,
        flexDirection: "row",
    },
    managesButtonsContainer: {
        width: "30%",
        height: 30,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "transparent",
    },
    buttonsTextsItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    buttonsTextsRedItem: {
        color: "red",
        fontSize: 14,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    acceptsButtonsContainer: {
        width: "30%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "transparent",
    },
    infoDropdownContentsSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    //search section
    searchContainer: {
        flexDirection: "column",
    },
    searchContentContainer: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 10,
    },
    searchContentIconContainer: {
        width: "8%",
    },
    searchContentTextContainer: {
        width: "90%",
    },
    inputSearch: {
        borderWidth: 0,
    },
    searchLiner: {
        width: "100%",
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
        borderBottomColor: "grey",
        marginBottom: 20,
    },

    //button section
    buttonsSectionContainer: {
        width: "100%",
        marginTop: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    managesButtonContainer: {
        width: "45%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "transparent",
    },
    buttonsTextItem: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    acceptsButtonContainer: {
        width: "45%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "red",
    },
    buttonsSectionsContainers: {
        width: "100%",
        marginTop: Platform.OS === "ios" ? -130 : -90,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});