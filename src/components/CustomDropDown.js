import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Modal, Text } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';
import { ArrowDown, ErrorIcon, PhoneDownArrow, SuccessIcon } from '../assets/svgs';
import { themeColors } from '../config/colors';
import CustomText from './CustomText';
import Spacer from './Spacer';

const CustomDropdown = ({ options, onSelect, labelColor, disabled, selectedOption, label, customStyle, contentStyle, isCountryFlag, errors = [], success = [], placeholder }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const dropdownRef = useRef(null);

    const handleSelectOption = (option, index) => {
        onSelect(option, index);
        setDropdownVisible(false);
    };

    const handleToggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const RenderMsg = useCallback(({ msg, isError }) => {
        return (
            <View style={styles.msgBox}>
                {isError ? <ErrorIcon /> : <SuccessIcon />}
                <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>{msg}</CustomText>
            </View>
        );
    }, [errors, success]);

    return (
        <View style={styles.container}>
            {label && <CustomText body medium color={themeColors.label}>{label}</CustomText>}
            <Spacer height={6} />
            <TouchableOpacity
                ref={dropdownRef}
                style={[styles.dropdownButton, customStyle]}
                disabled={disabled}
                onPress={handleToggleDropdown}
            >
                <CustomText body color={labelColor}>
                    {selectedOption ? selectedOption : placeholder ? placeholder : 'Select an option'}
                </CustomText>
                {isCountryFlag ? <PhoneDownArrow /> : <ArrowDown />}
            </TouchableOpacity>
            <Modal
                visible={isDropdownVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setDropdownVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
                <View style={[styles.dropdownContent, contentStyle]}>
                    <ScrollView>
                        {options?.map((val, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.dropdownOption}
                                onPress={() => handleSelectOption(val, index)}
                            >
                                   <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>{val}</CustomText>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
            {errors.map((msg, index) => <RenderMsg key={index} msg={msg} isError />)}
            {success.map((msg, index) => <RenderMsg key={index} msg={msg} />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    dropdownButton: {
        backgroundColor: "#f6f6f6",
        borderRadius: 8,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    overlay: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdownContent: {
        position: 'absolute',
        top: 65,
        width: '80%', // Adjust the width as needed
        alignSelf: 'center', // Center the modal horizontally
        // borderWidth: 0.2,
        // borderColor: themeColors.label,
        // borderRadius: 10,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    dropdownOption: {
        padding: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    dropdownOptionText: {
        fontSize: 16, // Adjust the font size as needed
        color: 'black',
    },
    msgBox: {
        marginTop: 10,
        marginLeft: 4,
        flexDirection: "row",
        alignItems: "center"
    },
});

export default CustomDropdown;


