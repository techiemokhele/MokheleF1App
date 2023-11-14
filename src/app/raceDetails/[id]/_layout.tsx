import { StyleSheet, View, Platform, TouchableOpacity, Text } from 'react-native';
import { Link, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Entypo, FontAwesome } from '@expo/vector-icons';

//custom
import { COLORS } from "../../../constants/theme";

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export default function RaceLayout() {
    return (
        <>
            <View style={styles.topTabsSectionContainer}>
                <View style={styles.topTabsSectionContent}>
                    {/*back button name*/}
                    <Link href={"/appScreens"} asChild>
                        <TouchableOpacity style={styles.topTabsBackContainer}>
                            <Entypo name="chevron-left" size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </Link>

                    {/*app name*/}
                    <View style={styles.topTabNameContainer}>
                        <Text style={styles.topTabNameItem}>
                            Race Details
                        </Text>
                    </View>

                    {/*calendar name*/}
                    <Link href={""} asChild>
                        <TouchableOpacity style={styles.topTabsCalendarContainer}>
                            <FontAwesome name="calendar-plus-o" size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>

            <TopTabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: COLORS.red,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        color: COLORS.white,
                        fontFamily: "F1Regular",
                        textTransform: "capitalize"
                    },
                    tabBarInactiveTintColor: COLORS.grey,
                    tabBarActiveTintColor: COLORS.white,
                    tabBarIndicatorStyle: {
                        backgroundColor: COLORS.white,
                        height: 5,
                    },
                }}
            >
                <TopTabs.Screen name='index' options={{ title: "Schedule" }} />
                <TopTabs.Screen name='media' options={{ title: "Media" }} />
                <TopTabs.Screen name='circuit' options={{ title: "Circuit" }} />
                <TopTabs.Screen name='rankings' options={{ title: "Ranking" }} />
            </TopTabs>
        </>
    );
}

const styles = StyleSheet.create({
    topTabsSectionContainer: {
        height: Platform.OS === "ios" ? 90 : 40,
        paddingBottom: 2,
        justifyContent: Platform.OS === "ios" ? "flex-end" : "center",
        alignItems: "flex-end",
        backgroundColor: COLORS.red,
    },
    topTabsSectionContent: {
        width: "100%",
        paddingHorizontal: 10,
        paddingBottom: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    topTabsBackContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    topTabNameContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    topTabNameItem: {
        color: COLORS.white,
        fontSize: 24,
        fontFamily: "F1BoldMobile",
    },
    topTabsCalendarContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
})