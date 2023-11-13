import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";

//custom
import racesResponse from "../../../assets/data/races.json";
import RaceListItemComponent from "../../components/RaceListItemComponent";
import { COLORS } from "../../constants/theme";
import dayjs from "dayjs";

export default function HomeScreen() {
  const races = racesResponse.data.races.response;

  const sortedDate = races.sort((d1, d2) => dayjs(d2.date).diff(dayjs(d1.date)));

  return (
    <View style={styles.homeScreenMainContainer}>
      <FlatList
        data={sortedDate}
        renderItem={({ item, index }) => <RaceListItemComponent item={item} round={sortedDate.length - index} />}
        ListFooterComponent={<View style={styles.footerContainer} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreenMainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  //bottom section
  footerContainer: {
    marginBottom: Platform.OS === "ios" ? "10%" : "10%",
  },
});