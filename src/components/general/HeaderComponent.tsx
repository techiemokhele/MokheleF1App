import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

//custom
import { COLORS } from "../../constants/theme";

export default function HeaderComponent({ title }: { title: string }) {
  return (
    <View style={styles.headerContentContainer}>
      {/*title section*/}
      <View style={styles.headerTitleSectionContainer}>
        <Text style={styles.headerTitleTextItem}>{title}</Text>
      </View>

      {/*see all section*/}
      <View style={styles.headerSeeAllSectionContainer}>
        <Text style={styles.headerSeeAllTextItem}>See all</Text>
        <Entypo name="chevron-right" size={24} color={COLORS.red} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContentContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitleSectionContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitleTextItem: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: "F1BoldMobile",
  },
  headerSeeAllSectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerSeeAllTextItem: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "400",
    marginRight: 10,
  },
})