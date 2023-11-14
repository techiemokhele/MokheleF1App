import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";
//custom
import raceRankingResponse from "../../../../assets/data/race-rankings.json";
import { COLORS } from "../../../constants/theme";
import RaceRankingListItemComponent from "../../../components/RaceRankingListItemComponent";

const raceRanking = raceRankingResponse.data.raceRankings.response;

export default function Rankings() {
    const { id } = useLocalSearchParams();

    const sortedPosition = raceRanking.sort((d1, d2) => d1.position - d2.position);

    return (
        <View style={styles.rankingTabMainContainer}>
            <FlatList
                data={sortedPosition}
                renderItem={({ item }) => <RaceRankingListItemComponent item={item} />}
                ListFooterComponent={<View style={{ marginBottom: 30 }} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rankingTabMainContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
});