import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, Link } from "expo-router";

export default function ManageSettingsScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={styles.manageSettingsMainContainer}>
            {/*top section*/}
            <View>
                {/*logo & header section*/}

                {/*info section*/}

                {/*button section*/}
            </View>

            {/*middle option section*/}

            {/*bottom button section*/}
        </View>
    )
}

const styles = StyleSheet.create({
    manageSettingsMainContainer: {
        flex: 1,
        backgroundColor: "#000",
    },
});