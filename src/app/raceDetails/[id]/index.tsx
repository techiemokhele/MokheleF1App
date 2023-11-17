import React from "react";
import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

//custom
import raceResponse from "../../../../assets/data/race.json";
import raceRankingResponse from "../../../../assets/data/race-rankings.json";
import raceHighlight from "../../../../assets/data/race-highlight.json"
import { COLORS } from "../../../constants/theme";

const race = raceResponse.data.races.response[0];
const raceRanking = raceRankingResponse.data.raceRankings.response;
const raceHighlights = raceHighlight.data.races.response;

export default function index() {
    const { id } = useLocalSearchParams();

    function renderRankingRaceTopSection() {
        return (
            <ImageBackground
                source={{ uri: "https://img.freepik.com/premium-photo/fast-racing-car-pilot-formula-one-champion-competitions-with-speed-flame-motorsport-car_326694-85069.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=sph" }}
                style={styles.topRaceImageSection}
            >
                <View style={styles.topRaceTextContainer}>
                    <Text style={styles.topRaceHeaderTextItem}>race finished</Text>

                    {/*race location section*/}
                    <View style={styles.raceTopDetailsContainer}>
                        <View style={styles.raceTopDetailsCircuitTextContainer}>
                            <Text style={styles.raceTopNameItem}>{race.competition.location.country}</Text>
                            <Text style={styles.raceTopNameItem}>{race.competition.location.city}</Text>
                            <Text style={styles.raceTopNameItem}>{race.season}</Text>
                        </View>
                    </View>

                    {/*race ranking snippet section*/}
                    <View style={styles.raceTopRankingContainer}>
                        {/*race ranking item*/}
                        {raceRanking.slice(0, 3).map((rank, i) => (
                            <View key={i}>
                                <View style={styles.raceRankingItemContainer}>
                                    <View style={styles.raceRankingPositionContainer}>
                                        <Text style={styles.raceRankingPositionTextItem}>{rank.position}</Text>
                                    </View>

                                    <View style={styles.raceRankingPositionNameContainer}>
                                        <Text style={styles.raceRankingPositionNameTextItem}>{rank.driver.name}</Text>
                                    </View>

                                    <View style={styles.raceRankingPositionTimeContainer}>
                                        <Text style={styles.raceRankingPositionTimeTextItem}>{rank.time}</Text>
                                    </View>
                                </View>

                                <View style={styles.raceRankingDivider} />
                            </View>
                        ))}

                        {/*race ranking view all*/}
                        <View style={styles.rankingViewAllContainer}>
                            <Text style={styles.rankingViewAllTextItem}>View Results</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    //middle race highlight section
    function renderRaceHighlightSection() {
        return (
            <View style={styles.middleRaceDetailsContainer}>
                {/*top menu section*/}
                <View style={styles.middleTopTextContainer}>
                    <Text style={styles.middleTopTextBoldItem}>
                        Relive the action
                    </Text>

                    <Text numberOfLines={2} style={styles.middleTopTextThinItem}>
                        Mokhele F1 {race.competition.name} {race.competition.location.city} {race.season}
                    </Text>
                </View>

                {/*middle previous race events section*/}
                <View style={styles.middleReviewContainer}>
                    <View style={styles.middleReviewContent}>
                        {raceHighlights.map((highlight, i) => (
                            <View key={i} style={styles.middleReviewContentContainer}>
                                {/*race date section*/}
                                <View style={styles.raceDateContainers}>
                                    <Text style={styles.raceDateTextItems}>
                                        {dayjs(highlight.date).format("DD")}
                                    </Text>

                                    <View style={styles.dateMonthContainers}>
                                        <Text style={styles.raceMonthTextItems}>
                                            {dayjs(highlight.date).format("MMM")}
                                        </Text>
                                    </View>
                                </View>

                                {/*info divider section*/}
                                <View style={styles.dashedLineContainers}>
                                    <View style={styles.dashedLines} />
                                </View>


                                {/*race info section*/}
                                <View style={styles.raceInfoContainers}>
                                    {/*location item*/}
                                    <Text numberOfLines={1} style={styles.locationTextItems}>
                                        {highlight.title}
                                    </Text>

                                    {/*about race item*/}
                                    <Text numberOfLines={2} style={styles.raceInfoTextItems}>
                                        <FontAwesome5 name="flag-checkered" size={16} color={COLORS.black} />
                                        {"  "}See highlights and analysis
                                    </Text>
                                </View>

                                {/*race arrow section*/}
                                <View style={styles.raceArrowContainers}>
                                    <Entypo name="chevron-right" size={24} color={COLORS.red} />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        )
    }

    //discover section
    function renderBottomDiscoverOption() {
        return (
            <View style={styles.discoverRaceDetailsContainer}>
                <View style={styles.middleTopTextContainer}>
                    <Text style={styles.middleTopTextBoldItem}>
                        discover more from mokhele F1
                    </Text>

                    <View style={styles.discoverRaceContentContainer}>
                        <ImageBackground
                            source={{ uri: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220920104707_F1_2023_calendar.jpg&w=700&q=90&c=1" }}
                            style={styles.discoverRaceContent}
                        >

                            <View style={styles.discoverRaceContentImageContainer}>
                                <Image
                                    source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                                    style={styles.discoverRaceContentImageItem}
                                />
                            </View>

                            <View style={styles.discoverRaceContentTextContainer}>
                                <Text style={styles.discoverRaceContentTextItem}>Mokhele F1 TV</Text>
                            </View>

                            <View style={styles.discoverRaceContentIconContainer}>
                                <Feather name="external-link" size={24} color={COLORS.red} />
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

                        <ImageBackground
                            source={{ uri: "https://cdn-wp.thesportsrush.com/2023/05/aa4b0f2e-id-2023-05-01t200108.540.jpg" }}
                            style={styles.discoverRaceContent}
                        >

                            <View style={styles.discoverRaceContentImageContainer}>
                                <Image
                                    source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                                    style={styles.discoverRaceContentImageItem}
                                />
                            </View>

                            <View style={styles.discoverRaceContentTextContainer}>
                                <Text style={styles.discoverRaceContentTextItem}>Mokhele F1 Race Guide</Text>
                            </View>

                            <View style={styles.discoverRaceContentIconContainer}>
                                <Feather name="external-link" size={24} color={COLORS.red} />
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

                        <View style={styles.discoverRacesContent}>
                            <View style={styles.discoverRacesContentImageContainer}>
                                <Image
                                    source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                                    style={styles.discoverRaceContentImageItem}
                                />
                            </View>

                            <View style={styles.discoverRaceContentTextContainer}>
                                <Text style={styles.discoverRaceContentTextItem}>Mokhele F1 Tickets</Text>
                            </View>

                            <View style={styles.discoverRaceContentIconContainer}>
                                <Feather name="external-link" size={24} color={COLORS.red} />
                            </View>

                            {/*overlay section*/}
                            <LinearGradient
                                colors={["transparent", COLORS.red]}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                            />
                        </View>

                        <View style={styles.discoverRacesContent}>
                            <View style={styles.discoverRacesContentImageContainer}>
                                <Image
                                    source={{ uri: "https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png" }}
                                    style={styles.discoverRaceContentImageItem}
                                />
                            </View>

                            <View style={styles.discoverRaceContentTextContainer}>
                                <Text style={styles.discoverRaceContentTextItem}>Mokhele F1 Experience</Text>
                            </View>

                            <View style={styles.discoverRaceContentIconContainer}>
                                <Feather name="external-link" size={24} color={COLORS.red} />
                            </View>

                            {/*overlay section*/}
                            <LinearGradient
                                colors={["transparent", COLORS.red]}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scheduleTabContainer}
        >
            {renderRankingRaceTopSection()}
            {renderRaceHighlightSection()}
            {renderBottomDiscoverOption()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scheduleTabContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    //top image section
    topRaceImageSection: {
        height: 300,
        width: "100%",
        resizeMode: "cover",
        marginBottom: 20,
    },
    topRaceTextContainer: {
        padding: 20,
        flexDirection: "column",
    },
    topRaceHeaderTextItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1Regular",
        textTransform: "uppercase",
        marginBottom: 10,
    },
    raceTopDetailsContainer: {
        width: "100%",
        flexDirection: 'row',
    },
    raceTopDetailsCircuitTextContainer: {
        width: "100%",
        height: 30,
        flexDirection: "row",
        paddingTop: 10,
        borderTopColor: COLORS.grey,
        borderRightColor: COLORS.grey,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 20,
    },
    raceTopNameItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1BoldMobile",
        marginRight: 10,
    },

    //race ranking section
    raceTopRankingContainer: {
        width: "100%",
        marginTop: 15,
        borderRadius: 10,
        overflow: "hidden",
    },
    raceRankingItemContainer: {
        paddingVertical: 8,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
    },
    raceRankingPositionContainer: {
        width: "5%",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    raceRankingPositionTextItem: {
        color: COLORS.black,
        fontSize: 16,
        fontFamily: "F1Regular",
    },
    raceRankingPositionNameContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    raceRankingPositionNameTextItem: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "F1BoldMobile",
    },
    raceRankingPositionTimeContainer: {
        width: "35%",
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: COLORS.grey,
    },
    raceRankingPositionTimeTextItem: {
        color: COLORS.black,
        fontSize: 10,
        fontFamily: "F1Regular",
    },
    raceRankingDivider: {
        width: "100%",
        borderColor: COLORS.black,
        borderWidth: StyleSheet.hairlineWidth * 3,
    },
    rankingViewAllContainer: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.red,
    },
    rankingViewAllTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1BoldMobile",
        textTransform: "uppercase",
    },

    //middle race section
    middleRaceDetailsContainer: {
        marginTop: 35,
        flexDirection: "column",
    },
    middleTopTextContainer: {
        width: "100%",
        paddingHorizontal: 30,
        flexDirection: "column",
    },
    middleTopTextBoldItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1BoldMobile",
        textTransform: "uppercase",
        marginBottom: 10,
    },
    middleTopTextThinItem: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "F1Regular",
        textTransform: "uppercase",
        opacity: 0.5,
    },

    //middle review section
    middleReviewContainer: {
        marginTop: 30,
        padding: 10,
        borderTopColor: COLORS.red,
        borderRightColor: COLORS.red,
        borderBottomColor: COLORS.red,
        borderTopWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderLeftWidth: 0,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
    },
    middleReviewContent: {
        marginVertical: 10,
        marginRight: 10,
        flexDirection: "column",
    },
    middleReviewContentContainer: {
        width: "100%",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: COLORS.white,
        marginBottom: 5,
    },
    raceDateContainers: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    raceDateTextItems: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "F1Regular",
    },
    dateMonthContainers: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: COLORS.lightGrey,
    },
    raceMonthTextItems: {
        color: COLORS.dimGrey,
        fontSize: 10,
        fontFamily: "F1BoldMobile",
        textTransform: "uppercase",
    },
    dashedLineContainers: {
        marginHorizontal: "3%",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashedLines: {
        height: '100%',
        borderRightWidth: 1,
        borderColor: COLORS.dimGrey,
    },
    raceInfoContainers: {
        width: "66%",
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    roundTextItems: {
        color: COLORS.red,
        fontSize: 14,
        fontFamily: "F1Regular",
    },
    locationTextItems: {
        marginVertical: 5,
        color: COLORS.black,
        fontSize: 18,
        fontFamily: "F1BoldMobile",
    },
    raceInfoTextItems: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: "400",
    },
    raceArrowContainers: {
        width: "7%",
        justifyContent: "center",
        alignItems: "center",
    },

    //discover section
    discoverRaceDetailsContainer: {
        marginTop: 35,
        flexDirection: "column",
        marginBottom: Platform.OS === "ios" ? 50 : 0,
    },
    discoverRaceContentContainer: {
        flexDirection: "column",
        marginBottom: 30,
        marginLeft: -20,
    },
    discoverRaceContent: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: "hidden",
    },
    discoverRaceContentImageContainer: {
        width: 40,
        height: 40,
        marginTop: 30,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: COLORS.white,
        zIndex: 1,
    },
    discoverRaceContentImageItem: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    discoverRaceContentTextContainer: {
        width: "60%",
        left: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        zIndex: 1,
    },
    discoverRaceContentTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1BoldMobile",
        textTransform: "uppercase",
    },
    discoverRaceContentIconContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    discoverRacesContent: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 0,
        overflow: "hidden",
        backgroundColor: COLORS.white,
    },
    discoverRacesContentImageContainer: {
        width: 60,
        height: 40,
        marginTop: 30,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: COLORS.black,
        zIndex: 1,
    },
});