import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import { themeColors } from "../config/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../config/typography";

const Loading = ({ isLoading1 = false, isLoading2 = false, isFromRoute }) => {
    if (isLoading1) {
        return (
            <View style={styles.container}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        size={"large"}
                        color={themeColors.primary}
                    />
                </View>
            </View>
        );
    } else if (isLoading2) {
        return (
            <View style={isFromRoute ? styles.container3 : styles.container2}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        size={"large"}
                        color={themeColors.primary}
                    />
                </View>
            </View>
        );
    } else {
        return null;
    }
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        top: -90,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)'",
        zIndex: 10000,
    },
    container2: {
        ...StyleSheet.absoluteFill,
        top: -90,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)'",
        zIndex: 10000,
    },
    container3: {
        ...StyleSheet.absoluteFill,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)'",
        zIndex: 10000,
    },

    loaderContainer: {
        backgroundColor: themeColors.white,
        width: 74,
        height: 74,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});
