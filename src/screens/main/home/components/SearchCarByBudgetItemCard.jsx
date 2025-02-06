import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT } from '../../../../config/typography'

const SearchCarByBudgetItemCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: index === activeIndx ? themeColors.primary : '#F9F9F9' }]} onPress={onClick} activeOpacity={0.6}>
            <View style={styles.item}>
                <CustomText body2 color='black'>{`${item.range} (${item.value !== null ? item.value : 'N/A'})`}</CustomText>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.01} />
            {/* <View style={styles.item2}>
                <CustomText body2 color='black' >{item.value !== null ? item.value : 'N/A'}</CustomText>
            </View> */}
        </TouchableOpacity>
    )
}

export default SearchCarByBudgetItemCard

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#B4B4F2FF',
        marginHorizontal: 8,
        borderRadius: 8,
    },
    item2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECC4B6',
        padding: 6,
        marginHorizontal: 8,
        borderRadius: 8,
    },
})



