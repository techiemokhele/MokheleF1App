import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

//custom
import videoData from "../../../../assets/data/race-blog-video.json";
import newsData from "../../../../assets/data/race-blog-news.json";
import { COLORS } from "../../../constants/theme";

//components
import HeaderComponent from "../../../components/general/HeaderComponent";
import VideoHighlightListItemComponent from "../../../components/VideoHighlightListItemComponent";
import NewsHighLightItemListComponent from "../../../components/NewsHighLightItemListComponent";

const videoHighlights = videoData.data.response;
const newsHighlights = newsData.data.response;

export default function Media() {
    return (
        <View style={styles.mediaTabMainContainer}>
            {/*top video section*/}
            <View style={styles.headerComponentContainer}>
                <HeaderComponent title={"Video"} />
            </View>

            {/*video section*/}
            <View style={styles.videoComponentContentContainer}>
                <FlatList
                    horizontal
                    data={videoHighlights}
                    renderItem={({ item, index }) =>
                        <VideoHighlightListItemComponent
                            item={item}
                            isLastItem={index === videoHighlights.length - 1}
                        />
                    }
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/*top news section*/}
            <View style={styles.headerComponentContainer}>
                <HeaderComponent title={"News"} />
            </View>

            <FlatList
                data={newsHighlights}
                numColumns={2}
                renderItem={({ item }) => <NewsHighLightItemListComponent item={item} />}
                ListFooterComponent={<View style={{ marginBottom: 30 }} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mediaTabMainContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    headerComponentContainer: {
        marginTop: 40,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    videoComponentContentContainer: {
        padding: 10,
        borderTopColor: COLORS.red,
        borderRightColor: COLORS.red,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderBottomRightRadius: 30,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 30,
    }
});