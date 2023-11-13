import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

//custom
import raceResponse from "../../../../assets/data/race.json";

const race = raceResponse.data.races.response[0];

export default function index() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>index {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});