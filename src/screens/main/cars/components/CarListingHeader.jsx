import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { themeColors } from '../../../../config/colors'
import { SCREEN_WIDTH } from '../../../../config/typography'
import { CarCompareIcon, FilterIcon, SortingIcon } from '../../../../assets/svgs'

const data = [
    {
        label: "Compare",
        svg: <CarCompareIcon />
    },
    {
        label: "Filters",
        svg: <FilterIcon />
    },
    {
        label: "Sort",
        svg: <SortingIcon />
    }
]

const CarListingHeader = ({ onPres }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                {data.map((val, indx) => (
                    <TouchableOpacity key={indx} style={styles.view}>
                        {val.svg}
                        <CustomText body color={themeColors.black400}>{val.label}</CustomText>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default CarListingHeader


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.9
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view:{
        flexDirection: 'row', 
        gap:8
    }
})