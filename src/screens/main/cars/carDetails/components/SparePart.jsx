import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config/typography'
import { themeColors } from '../../../../../config/colors'
import CustomText from '../../../../../components/CustomText'

const SparePartCar = ({ item, indx }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                <CustomText color={themeColors.label} body >{item.label}</CustomText>
            </View>
            <View style={styles.rightView}>
                <CustomText color={themeColors.black} body2 >{item.val}</CustomText>
            </View>
        </View>
    )
}

export default SparePartCar

const styles = StyleSheet.create({

    container: {
        height:SCREEN_HEIGHT*0.09,
        paddingHorizontal:25,
        borderBottomWidth: 0.2,
        borderBottomColor: '#0C0CB8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    },
    rightView: {
        alignItems: 'center'
    }
})