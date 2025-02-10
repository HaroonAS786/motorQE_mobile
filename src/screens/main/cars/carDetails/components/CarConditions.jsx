import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config/typography'
import { themeColors } from '../../../../../config/colors'
import CustomText from '../../../../../components/CustomText'
import { ArrowDown, CarConditionCheck } from '../../../../../assets/svgs'

const CarCondition = ({ item, indx }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                <CarConditionCheck />
                <CustomText color={themeColors.label} body >{item}</CustomText>
            </View>
            <View style={styles.rightView}>
                <ArrowDown />
            </View>
        </View>
    )
}

export default CarCondition

const styles = StyleSheet.create({

    container: {
        height: SCREEN_HEIGHT * 0.09,
        paddingHorizontal: 25,
        borderBottomWidth: 0.2,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    rightView: {
        alignItems: 'center'
    }
})