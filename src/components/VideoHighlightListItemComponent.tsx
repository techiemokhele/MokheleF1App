import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";

//custom
import videoData from "../../assets/data/race-blog-video.json";
import { COLORS } from "../constants/theme";

const videoHighlights = videoData.data.response;

export default function VideoHighlightListItemComponent({
    item, isLastItem
}: {
    item: (typeof videoHighlights)[0]; isLastItem: boolean;
}) {

    const handlePress = async () => {
        await WebBrowser.openBrowserAsync(item.url);
    };

    return (
        <Pressable
            onPress={handlePress}
            style={[styles.videoHighlightContainer, { marginRight: isLastItem ? 0 : 5 }]}
        >
            <View style={styles.videoHighlightContentContainer}>
                {/*image section*/}
                <ImageBackground
                    source={{ uri: item.thumbnailImage }}
                    style={styles.videoThumbnailImageContainer}
                >
                    <View style={styles.videoPlayerContainer}>
                        <View style={styles.videoPlayerIconContainer}>
                            <Ionicons name="md-play-outline" size={24} color={COLORS.white} />
                        </View>

                        <View style={styles.videoPlayerTimeContainer}>
                            <Text style={styles.videoPlayerTimeTextItem}>{item.timestamp}</Text>
                        </View>
                    </View>

                    {/*overlay section*/}
                    <LinearGradient
                        colors={["transparent", "rgba(0,0,0,1)"]}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: "35%",
                        }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </ImageBackground>

                {/*title section*/}
                <View style={styles.videoTitleContainer}>
                    <Text numberOfLines={4} style={styles.videoTitleTextItem}>{item.title}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    videoHighlightContainer: {
        width: 200,
        flexDirection: "column",
    },
    videoHighlightContentContainer: {
        marginHorizontal: 0,
    },
    videoThumbnailImageContainer: {
        width: 180,
        height: 120,
        resizeMode: "contain",
        borderRadius: 10,
        overflow: "hidden",
    },
    videoPlayerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 1,
    },
    videoPlayerIconContainer: {
        top: 75,
        width: "30%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        backgroundColor: COLORS.red,
    },
    videoPlayerTimeContainer: {
        top: 100,
        width: "30%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    videoPlayerTimeTextItem: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "F1Regular",
    },
    videoTitleContainer: {
        marginTop: 8,
        width: 180,
    },
    videoTitleTextItem: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "400",
    },
});