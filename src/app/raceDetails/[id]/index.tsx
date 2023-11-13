import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function index() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>index {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});