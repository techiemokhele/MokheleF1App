import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom
import racesResponse from "../../assets/data/races.json";

export default function HomeScreen() {
  const races = racesResponse.data.races.response;

  return (
    <View style={styles.homeScreenMainContainer}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreenMainContainer: {
    flex: 1,
    backgroundColor: "red",
  }
});