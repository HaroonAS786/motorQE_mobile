import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../config/colors'
import { AddIcon } from '../assets/svgs'

const FloatButton = ({ onPress, color, disabled,customStyle }) => {

    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, { backgroundColor: color }]} activeOpacity={0.8} onPress={onPress}>
            <AddIcon />
        </TouchableOpacity>
    )
}

export default FloatButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        borderRadius: 100
    }
})