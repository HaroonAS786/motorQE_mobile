import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config/typography'
import { themeColors } from '../../../../../config/colors'
import CustomText from '../../../../../components/CustomText'

const FeatureSpecification = ({ item, indx }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                {item.svg}
                <CustomText color={themeColors.label} body >{item.label}</CustomText>
            </View>
            <View style={styles.rightView}>
                <CustomText color={themeColors.black} body2 >{item?.val}</CustomText>
            </View>
        </View>
    )
}

export default FeatureSpecification

const styles = StyleSheet.create({

    container: {
        // height: SCREEN_HEIGHT * 0.09,
        marginHorizontal:16,
        paddingVertical:12,
        paddingHorizontal: 16,
        borderRadius:6,
        backgroundColor:'#EEEAEA',
        borderWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:12
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