import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import SearchByYearItemCard from './SearchByYearItemCard';


const SearchByYearScreen = () => {

    const [activeCarIndx, setActiveCarIndx] = useState(0);

    return (
        <View style={styles.container}>
            <CustomText
                subtitle
                bold
                color={themeColors.black} >
                Search By Year
            </CustomText>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                    paddingBottom: SCREEN_HEIGHT * 0.04,
                }}
                data={['2021','2022','2023','2024','2025','2026','2027','2028']}
                renderItem={({ item, index }) => {
                    return (
                        <SearchByYearItemCard
                            item={item}
                            index={index}
                            activeIndx={activeCarIndx}
                            setActiveIndx={setActiveCarIndx}
                            key={index}
                            onClick={() => {
                                setActiveCarIndx(index)
                            }}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default SearchByYearScreen

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        justifyContent: 'flex-start'
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ECC4B6FF',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#FB5722',
        borderRadius: 100, // Change color for active dot
        width: 20,
        height: 10,
    },
    viewAllCarBtn: {
        backgroundColor: "#ECC4B6FF",
    },
})