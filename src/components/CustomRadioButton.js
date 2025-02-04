import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { themeColors } from '../config/colors';

const CustomRadioButton = ({ options, onSelect,selectedOption }) => {


    const handleOptionSelect = (option) => {
        onSelect(option);
    };

    return (
        <View style={{padding:16}}>
            {options?.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    activeOpacity={0.6}
                    style={styles.radioButton}
                    onPress={() => handleOptionSelect(option)}
                >
                    <View style={[styles.radioButtonInner,
                    { borderColor: selectedOption === option ? themeColors.primary : 'black' }
                    ]}
                    >
                        {selectedOption === option && <View style={styles.radioButtonSelected} />}
                    </View>
                    <CustomText  subtitle color={themeColors.black}>{option}</CustomText>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioButtonInner: {
        width: 24,
        height: 24,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: themeColors.primary,
    },
    label: {
        fontSize: 16,
    },
});

export default CustomRadioButton;
