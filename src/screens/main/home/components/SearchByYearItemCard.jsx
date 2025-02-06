import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IMAGES } from '../../../../assets/images'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'
import { SeacrhYearIcon } from '../../../../assets/svgs'

const SearchByYearItemCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container]} onPress={onClick} activeOpacity={0.6}>
            <Spacer height={SCREEN_HEIGHT * 0.01} />
            <View>
                <SeacrhYearIcon />
                <View style={styles.label}>
                    <CustomText color={themeColors.primary} semiBold>{item}</CustomText>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default SearchByYearItemCard

const styles = StyleSheet.create({
    container: {
        // borderRadius: 8,
        width: 70,
        height: 70,
        marginRight: 16,
        // borderWidth: 1,
        // borderColor: 'lightgrey',
        // alignItems: 'center',
        // justifyContent: 'center',
        // gap: 5,
    },
    label: {
        position: 'absolute',
        alignItems:'center',
        left: 0,
        right: 0,
        top: 24, bottom: 0
    }
})
