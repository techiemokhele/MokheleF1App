import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//custom
import raceRankingResponse from "../../assets/data/race-rankings.json";
import { COLORS } from "../constants/theme";

const raceRanking = raceRankingResponse.data.raceRankings.response;

export default function RaceRankingListItemComponent({ item }: { item: (typeof raceRanking)[0] }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.rankingTabContainer}>
            <View style={styles.rankingTabContent}>
                {/*rank item*/}
                <View style={[styles.rankingItemContainer, {
                    backgroundColor:
                        item.team.name.includes("Red") ? COLORS.yellow
                            : item.team.name.includes("Aston") ? COLORS.green
                                : item.team.name.includes("Ferrari") ? COLORS.red
                                    : item.team.name.includes("Mercedes") ? COLORS.teal
                                        : item.team.name.includes("Alfa") ? COLORS.alfaGreen
                                            : item.team.name.includes("Alpine") ? COLORS.blue
                                                : item.team.name.includes("Williams") ? COLORS.lightBlue
                                                    : item.team.name.includes("AlphaTauri") ? COLORS.darkBlue
                                                        : item.team.name.includes("Haas") ? COLORS.haasRed
                                                            : item.team.name.includes("McLaren") ? COLORS.orange
                                                                : COLORS.white,
                }]}>
                    {/*text section*/}
                    <View style={styles.rankingTextContainer}>
                        {/*badge section*/}
                        <View style={styles.rankingTextContentContainer}>
                            {/*badge item*/}
                            <View style={styles.rankingBadgeContainer}>
                                <Image source={{ uri: item.team.logo }} style={styles.rankingBadgeImageItem} />
                            </View>

                            {/*line section*/}
                            <View style={styles.rankingLineContainer}>
                                <View style={styles.rankingLine} />
                            </View>

                            {/*driver name section*/}
                            <View style={styles.rankingDriverNameContainer}>
                                <Text style={styles.rankingDriverNameTextItem}>
                                    {item.driver.name}
                                </Text>
                            </View>
                        </View>

                        {/*position section*/}
                        <View style={styles.rankingsTextContentContainer}>
                            {/*badge item*/}
                            <View style={styles.rankingsBadgeContainer}>
                                {item.position === 1 || item.position === 2 || item.position === 3 ?
                                    <Entypo
                                        name="trophy"
                                        size={20}
                                        color={
                                            item.position === 1 ? COLORS.gold :
                                                item.position === 2 ? COLORS.silver :
                                                    COLORS.bronze}
                                    />
                                    : null}
                                <Text style={styles.rankingsDriverNameTextItem}>
                                    {item.position === 1 ? "  " + item.position + "st" :
                                        item.position === 2 ? "  " + item.position + "nd"
                                            : item.position === 3 ? "  " + item.position + "rd"
                                                : item.position + "th"} place
                                </Text>
                            </View>

                            {/*line section*/}
                            <View style={styles.rankingsLineContainer}>
                                <View style={styles.rankingsLine} />
                            </View>

                            {/*driver name section*/}
                            <View style={styles.rankingsDriverNameContainer}>
                                <Text style={styles.rankingsDriverNameTextItem}>
                                    {item.time}
                                </Text>
                            </View>
                        </View>

                        {/*team name section*/}
                        <View style={styles.rankingTeamNameContainer}>
                            <Text style={styles.rankingTeamNameTextItem}>{item.team.name}</Text>
                        </View>
                    </View>

                    {/*image section*/}
                    <View style={styles.rankingImageContainer}>
                        <Image source={{ uri: item.driver.image }} style={styles.rankingImageItem} />
                    </View>

                    {/*overlay section*/}
                    <LinearGradient
                        colors={["transparent", "rgba(0,0,0,1)"]}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "110%",
                            height: "100%",
                        }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rankingTabContainer: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "column",
    },
    rankingTabContent: {
        marginTop: 10,
        flexDirection: "column",
    },
    rankingItemContainer: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 20,
        borderRadius: 15,
        marginBottom: 10,
    },

    //text section
    rankingTextContainer: {
        width: "53%",
        flexDirection: "column",
        zIndex: 1,
    },
    rankingTextContentContainer: {
        width: "100%",
        flexDirection: "row",
    },
    rankingBadgeContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    rankingBadgeImageItem: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    rankingLineContainer: {
        marginHorizontal: "10%",
        height: 40,
        top: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    rankingLine: {
        height: '100%',
        borderRightWidth: 1,
        borderColor: COLORS.white,
    },
    rankingDriverNameContainer: {
        width: "68%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rankingDriverNameTextItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1BoldMobile",
    },

    //position section
    rankingsTextContentContainer: {
        width: "100%",
        flexDirection: "row",
        marginTop: 30,
        zIndex: 1,
    },
    rankingsBadgeContainer: {
        width: "auto",
        top: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rankingsLineContainer: {
        top: 5,
        marginHorizontal: "5%",
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    rankingsLine: {
        height: '100%',
        borderRightWidth: 1,
        borderColor: COLORS.white,
    },
    rankingsDriverNameContainer: {
        width: "auto",
        top: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    rankingsDriverNameTextItem: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "F1Regular",
    },
    rankingTeamNameContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rankingTeamNameTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1BoldMobile",
    },

    //image section
    rankingImageContainer: {
        width: "40%",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        left: 15,
        zIndex: 1,
    },
    rankingImageItem: {
        width: 180,
        height: 150,
        resizeMode: "contain",
        borderBottomRightRadius: 30,
        overflow: "hidden",
    },
});