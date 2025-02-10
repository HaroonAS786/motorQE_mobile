import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import FeaturedCarItemCard from '../comonComponents/CarItemCard';
import CustomText from '../../../../components/CustomText';
import { navigationRef } from '../../../../navigations/RootNaviagtion';


const AllCarsScreen = () => {

    return (
        <View style={styles.container}>
            <Spacer height={SCREEN_HEIGHT * 0.03} />
            <CustomText color={themeColors.label} semiBold body >3000 cars found </CustomText>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * 0.5 }}
                data={[0, 1, 2, 3]}
                renderItem={({ item, index }) => {
                    return (
                        <FeaturedCarItemCard
                            item={item}
                            index={index}
                            key={index}
                            onClick={() => {
                               navigationRef.navigate('CarDetailScreen')
                            }}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

export default AllCarsScreen

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
    viewAll: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewAllLabel: {
        backgroundColor: themeColors.primary,
        borderRadius: 100,
        width: '30%',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
