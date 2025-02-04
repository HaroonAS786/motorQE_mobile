import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../assets/svgs";
import Spacer from "./Spacer";
import { SCREEN_WIDTH } from "../config/typography";
// import { ErrorIcon, SuccessIcon } from "../assets/svgs/components";

const CustomTextInputArea = ({
    label,
    placeholder,
    onChangeText,
    maxLength = 50, //by default 50 characters
    password = false,
    errors = [],
    success = [],
    warnings = [],
    value = undefined,
    onBlur,
    inputStyle,
    numberOfLines,
    multiline,
    autoCapitalize,
    descriptionWords,
    inputMainCon,
    editable
}) => {

    const [valueText, setValueText] = useState("0")
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const borderStyle = {
        borderColor: isFocused ? (errors.length > 0 ? "red" : "black") : "#F3F3F3",
    };

    const RenderMsg = useCallback(({ msg, isError, isWarning }) => {
        if (isWarning) {
            return (
                <Animated.View style={styles.msgBox}>
                    {isWarning && <InfoIcon strokeColor={themeColors.green} />}
                    <CustomText style={{ marginLeft: 4, width: SCREEN_WIDTH * 0.8 }} color={themeColors.black}>
                        {msg}
                    </CustomText>
                </Animated.View>
            )
        } else {
            return (
                <Animated.View style={styles.msgBox}>
                    {isError ? <ErrorIcon /> : <SuccessIcon />}
                    <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>
                        {msg}
                    </CustomText>
                </Animated.View>
            );
        }
    }, [errors, success, warnings]);


    const handleChangeText = useCallback((newText) => {
        onChangeText(newText);
        setValueText(newText.length);
    }, [onChangeText]);

    return (
        <View>
            {label && (
                <View style={styles.header}>
                    <CustomText body medium color={themeColors.label}>
                        {label}
                    </CustomText>
                    <CustomText body2 medium color={themeColors.label}>
                        {descriptionWords ? `${valueText}/${descriptionWords}` : `${valueText}/100`}
                    </CustomText>
                </View>
            )}
            <Spacer height={6} />
            <View style={[styles.textAreaContainer, { ...borderStyle }]}>
                <TextInput
                    value={value}
                    maxLength={maxLength}
                    spellCheck={true}  // For Android
                    autoCorrect={true}
                    placeholder={placeholder}
                    placeholderTextColor={themeColors.label}
                    style={[styles.textArea]}
                    onChangeText={handleChangeText}
                    secureTextEntry={password}
                    onBlur={(e) => {
                        handleBlur();
                        onBlur && onBlur(e);
                    }}
                    editable={editable}
                    onFocus={handleFocus}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                />
            </View>
            {errors.map(msg => <RenderMsg key={msg} msg={msg} isError />)}
            {success.map(msg => <RenderMsg key={msg} msg={msg} />)}
            {warnings.map(msg => <RenderMsg key={msg} msg={msg} isWarning />)}
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        marginVertical: 10
    },
    textAreaContainer: {
        height: 100,
        borderWidth: 1,
        backgroundColor: "#f6f6f6",
        borderRadius: 8,
    },
    textArea: {
        justifyContent: "flex-start",
        fontSize: 16,
        paddingTop: 12,
        paddingHorizontal: 12
    },
    msgBox: {
        marginTop: 10,
        marginLeft: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default CustomTextInputArea;