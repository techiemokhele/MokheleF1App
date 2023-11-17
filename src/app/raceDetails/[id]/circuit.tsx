import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Entypo, Feather } from "@expo/vector-icons";

//custom
import raceResponse from "../../../../assets/data/races.json";
import { COLORS } from "../../../constants/theme";

const race = raceResponse.data.races.response[22];

export default function Circuit() {
    const { id } = useLocalSearchParams();

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={styles.circuitTabMainContainer}
        >
            {/*top circuit image section*/}
            <View style={styles.circuitImageContainer}>
                {/*circuit text section*/}
                <View style={styles.circuitTopDetailsSection}>
                    <View style={styles.circuitLocationTextContainer}>
                        <Text style={styles.circuitLocationTextItem}>{race.competition.name} </Text>
                        <Text style={styles.circuitSeasonTextItem}>{race.season}</Text>
                    </View>
                    <Text style={styles.circuitNameTextItem}>{race.circuit.name}</Text>
                </View>

                {/*circuit image section*/}
                <View style={styles.circuitImageItemContainer}>
                    <Image source={{ uri: race.circuit.image }} style={styles.circuitImageItem} />
                </View>
            </View>

            {/*middle circuit info section*/}
            <View style={styles.circuitDetailsContainer}>
                {/*lap length item*/}
                <View style={styles.circuitLengthContainer}>
                    <View style={styles.circuitLengthsContent}>
                        <Text style={styles.circuitLengthTextItem}>Circuit length</Text>
                        <Text style={styles.circuitLengthValueItem}>{race.distance}</Text>
                    </View>
                </View>

                {/*number of lap item*/}
                <View style={styles.circuitLapsContentContainer}>
                    {/*laps item*/}
                    <View style={styles.circuitLapsContainer}>
                        <View style={styles.circuitLengthContent}>
                            <Text style={styles.circuitLengthTextItem}>No. of laps</Text>
                            <Text style={styles.circuitLengthValueItem}>{race.laps.total}</Text>
                        </View>
                    </View>

                    {/*first grand item*/}
                    <View style={styles.circuitLapsContainer}>
                        <View style={styles.circuitLengthContent}>
                            <Text style={styles.circuitLengthTextItem}>First Grand Prix</Text>
                            <Text style={styles.circuitLengthValueItem}>2009</Text>
                        </View>
                    </View>
                </View>

                {/*lap distance item*/}
                <View style={styles.circuitDistanceContainer}>
                    <View style={styles.circuitLengthContent}>
                        <Text style={styles.circuitLengthTextItem}>Race distance</Text>
                        <Text style={styles.circuitLengthValueItem}>306.183 KM</Text>
                    </View>
                </View>

                {/*lap record item*/}
                <View style={styles.circuitDistanceContainer}>
                    <View style={styles.circuitLengthContent}>
                        <Text style={styles.circuitLengthTextItem}>Lap record</Text>
                        <Text style={styles.circuitLengthValueItem}>{race.fastest_lap.time}</Text>
                        <Text style={styles.circuitLengthsValueItem}>Max Verstappen ({race.season})</Text>
                    </View>
                </View>
            </View>

            {/*bottom circuit links section*/}
            <View style={styles.circuitMoreInfoContainer}>
                {/*onboard lap*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>Onboard Lap</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Entypo name="chevron-right" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>

                {/*race results*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>{race.season} Race Results</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Feather name="external-link" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>

                {/*race report*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>{race.season} Race Report</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Entypo name="chevron-right" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>

                {/*video highlight*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>{race.season} Video Highlight</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Entypo name="chevron-right" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>

                {/*destination guide*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>Destination Guide</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Feather name="external-link" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>

                {/*full schedule*/}
                <View style={styles.circuitMoreInfoContent}>
                    <View style={styles.circuitMoreInfoContentContainer}>
                        {/*name section*/}
                        <View style={styles.circuitMoreInfoNameTextContainer}>
                            <Text style={styles.circuitMoreInfoNameTextItem}>Full Schedule</Text>
                        </View>

                        {/*icon section*/}
                        <View style={styles.circuitMoreInfoIconContainer}>
                            <Entypo name="chevron-right" size={24} color={COLORS.red} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    circuitTabMainContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    //circuit section
    circuitImageContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 45,
        flexDirection: "column",
    },
    circuitTopDetailsSection: {
        flexDirection: "column",
        marginBottom: 10,
    },
    circuitLocationTextContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    circuitLocationTextItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1BoldMobile",
    },
    circuitSeasonTextItem: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: "F1Regular",
    },
    circuitNameTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1Regular",
        opacity: 0.5,
    },
    circuitImageItemContainer: {
        width: "100%",
        marginTop: 20,
        flexDirection: "column",
        marginBottom: 10,
    },
    circuitImageItem: {
        width: "100%",
        aspectRatio: 16 / 9,
        resizeMode: "cover",
    },

    //circuit details section
    circuitDetailsContainer: {
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: "column",
        marginBottom: 60,
    },
    circuitLengthContainer: {
        flexDirection: "column",
        width: "100%",
        height: 90,
        borderTopColor: COLORS.red,
        borderRightColor: COLORS.red,
        borderTopWidth: 10,
        borderRightWidth: 10,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 30,
    },
    circuitLengthContent: {
        marginVertical: 0,
    },
    circuitLengthsContent: {
        marginVertical: 20,
    },
    circuitLengthTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1Regular",
        opacity: 0.5,
        marginBottom: 10,
    },
    circuitLengthValueItem: {
        color: COLORS.white,
        fontSize: 28,
        fontFamily: "F1BoldMobile",
    },
    circuitLapsContentContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circuitLapsContainer: {
        marginTop: 40,
        flexDirection: "column",
        width: "45%",
        height: 65,
        borderBottomColor: COLORS.grey,
        borderRightColor: COLORS.grey,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomRightRadius: 30,
    },
    circuitDistanceContainer: {
        marginTop: 40,
        flexDirection: "column",
        width: "100%",
        height: 80,
        borderBottomColor: COLORS.grey,
        borderRightColor: COLORS.grey,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomRightRadius: 30,
    },
    circuitLengthsValueItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1Regular",
        opacity: 0.5,
        marginVertical: 5,
    },

    //circuit more info section
    circuitMoreInfoContainer: {
        width: "97%",
        flexDirection: "column",
        marginBottom: 40,
    },
    circuitMoreInfoContent: {
        height: 80,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        marginBottom: 5,
        backgroundColor: COLORS.white,
    },
    circuitMoreInfoContentContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circuitMoreInfoNameTextContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    circuitMoreInfoNameTextItem: {
        color: COLORS.black,
        fontSize: 16,
        fontFamily: "F1BoldMobile",
    },
    circuitMoreInfoIconContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
});