import React from "react";
import { Image, ImageBackground, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

//custom
import newsData from "../../assets/data/race-blog-news.json";
import { COLORS } from "../constants/theme";

const newsHighlights = newsData.data.response;

export default function NewsHighLightItemListComponent({ item }: { item: (typeof newsHighlights)[0] }) {
    const handlePress = async () => {
        await WebBrowser.openBrowserAsync(item.url);
    };

    return (
        <Pressable style={styles.newsHighlightContainer} onPress={handlePress}>
            <View style={styles.newsContentContainer}>
                {/*images section*/}
                <ImageBackground source={{ uri: item.thumbnailImage }} style={styles.newsImageContainer}>
                    {!item.isVideo ? (
                        <View style={styles.newsBlogContainer}>
                            {/*logo icon section*/}
                            <View style={styles.newsCompanyImageContainer}>
                                <Image
                                    source={{ uri: "https://static.cdnlogo.com/logos/f/60/formula-1-8211-f1.png" }}
                                    style={styles.newsCompanyImageItem}
                                />
                            </View>

                            {/*save icon section*/}
                            <View style={styles.newsSaveIconContainer}>
                                <Feather name="bookmark" size={16} color={COLORS.white} />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.newsVideoPlayerContainer}>
                            <View style={styles.newsVideoPlayerIconContainer}>
                                <AntDesign name="playcircleo" size={30} color={COLORS.white} />
                            </View>

                            <View style={styles.newsVideoPlayerButtonContainer}>
                                <View style={styles.newsVideoPlayerButtonContent}>
                                    <FontAwesome name="play" size={10} color={COLORS.white} />
                                    <Text style={styles.newsVideoPlayerButtonTextItem}>{"  "}Watch Race Replay</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ImageBackground>

                {/*text section*/}
                <View style={styles.newsTextContentContainer}>
                    {/*text section*/}
                    <View style={styles.newsTextContainer}>
                        <Text numberOfLines={3} style={styles.newsTextItem}>
                            {item.title}
                        </Text>
                    </View>

                    {/*type section*/}
                    <View style={styles.newsTypeContainer}>
                        <Text style={styles.newsTypeTextItem}>
                            {item.isVideo ? "VIDEO" : item.isFeature ? "FEATURE" : "NEWS"}
                        </Text>
                    </View>

                    {/*info section*/}
                    <View style={styles.newsInfoContainer}>
                        {/*date section*/}
                        <View style={styles.newsDateContainer}>
                            <Text style={styles.newsDateTextItem}>
                                {item.timestamp}
                            </Text>
                        </View>

                        {/*action section*/}
                        <View style={styles.newsActionContainer}>
                            <View style={styles.newsActionIconContainer}>
                                <AntDesign name="sharealt" size={14} color={COLORS.white} />
                            </View>

                            <View style={styles.newsActionIconsContainer}>
                                <Ionicons name="ellipsis-vertical-sharp" size={14} color={COLORS.white} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    newsHighlightContainer: {
        width: Platform.OS === "ios" ? 212 : 175,
        marginTop: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    newsContentContainer: {
        width: "100%",
        marginHorizontal: 5,
        flexDirection: "column",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: "hidden",
    },

    //news image blog
    newsImageContainer: {
        width: "100%",
        height: 130,
        resizeMode: "cover",
    },
    newsBlogContainer: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    newsCompanyImageContainer: {
        width: "10%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    newsCompanyImageItem: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    newsSaveIconContainer: {
        top: 80,
        width: "10%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    //news video player
    newsVideoPlayerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    newsVideoPlayerIconContainer: {
        marginTop: 40,
    },
    newsVideoPlayerButtonContainer: {
        width: "80%",
        marginTop: 30,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: COLORS.red,
    },
    newsVideoPlayerButtonContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
    newsVideoPlayerButtonTextItem: {
        color: COLORS.white,
        fontSize: 10,
        fontFamily: "F1Regular",
    },

    //news text content
    newsTextContentContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        overflow: "hidden",
        backgroundColor: COLORS.denim,
    },
    newsTextContainer: {
        marginBottom: 10,
    },
    newsTextItem: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "F1Regular",
        lineHeight: 25,
    },
    newsInfoContainer: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 10,
    },
    newsTypeContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    newsTypeTextItem: {
        color: COLORS.red,
        fontSize: 16,
        fontFamily: "F1Regular",
    },
    newsDateContainer: {
        width: "75%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    newsDateTextItem: {
        color: COLORS.white,
        fontSize: 9,
        fontFamily: "F1Regular",
        lineHeight: 15,
    },
    newsActionContainer: {
        width: "25%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    newsActionIconContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    newsActionIconsContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
});