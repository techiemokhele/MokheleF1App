import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import dayjs from "dayjs";
import { Entypo } from "@expo/vector-icons";

//custom
import racesResponse from "../../assets/data/races.json";
import { COLORS } from "../constants/theme";

const races = racesResponse.data.races.response;

export default function RaceListItem({ item, round }: { item: (typeof races)[0]; round: number }) {
    return (
        <Link href={`/raceDetails/${item.id}`} asChild>
            <Pressable style={styles.flatListMainContentContainer}>
                <View style={styles.flatListMainContent}>
                    {/*race date section*/}
                    <View style={styles.raceDateContainer}>
                        <Text style={styles.raceDateTextItem}>
                            {dayjs(item.date).subtract(2, "days").format("DD")}-{dayjs(item.date).format("DD")}
                        </Text>

                        <View style={styles.dateMonthContainer}>
                            <Text style={styles.raceMonthTextItem}>{dayjs(item.date).format("MMM")}</Text>
                        </View>
                    </View>

                    {/*info divider section*/}
                    <View style={styles.dashedLineContainer}>
                        <View style={styles.dashedLine} />
                    </View>


                    {/*race info section*/}
                    <View style={styles.raceInfoContainer}>
                        {/*round item*/}
                        <Text numberOfLines={1} style={styles.roundTextItem}>
                            Round {round}
                        </Text>

                        {/*location item*/}
                        <Text numberOfLines={1} style={styles.locationTextItem}>
                            {item.competition.location.country}
                        </Text>

                        {/*about race item*/}
                        <Text numberOfLines={2} style={styles.raceInfoTextItem}>
                            Mokhele F1 {item.competition.name} {item.season}
                        </Text>
                    </View>

                    {/*race arrow section*/}
                    <View style={styles.raceArrowContainer}>
                        <Entypo name="chevron-right" size={24} color={COLORS.red} />
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    //content section
    flatListMainContentContainer: {
        padding: 10,
        marginVertical: 5,
        marginRight: 15,
        flexDirection: "column",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: COLORS.red,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 12.81,
        elevation: 5,
        backgroundColor: COLORS.white,
    },
    flatListMainContent: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: "row",
    },

    //date section
    raceDateContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    raceDateTextItem: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "F1Regular",
    },
    dateMonthContainer: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: COLORS.lightGrey,
    },
    raceMonthTextItem: {
        color: COLORS.dimGrey,
        fontSize: 10,
        fontFamily: "F1BoldMobile",
        textTransform: "uppercase",
    },

    //dash line
    dashedLineContainer: {
        marginHorizontal: "3%",
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashedLine: {
        height: '100%',
        borderRightWidth: 1, // Adjust the width of the line as needed
        borderColor: COLORS.dimGrey, // Change the color of the line as needed
    },

    //race info section
    raceInfoContainer: {
        width: "72%",
        paddingHorizontal: 10,
        flexDirection: "column",
    },
    roundTextItem: {
        color: COLORS.red,
        fontSize: 14,
        fontFamily: "F1Regular",
    },
    locationTextItem: {
        marginVertical: 5,
        color: COLORS.black,
        fontSize: 18,
        fontFamily: "F1BoldMobile",
    },
    raceInfoTextItem: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: "400",
    },

    //race arrow section
    raceArrowContainer: {
        width: "7%",
        justifyContent: "center",
        alignItems: "center",
    },
})