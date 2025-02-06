import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import FeaturedCarItemCard from './FeaturedCarItemCard';

const ITEM_WIDTH = SCREEN_WIDTH * 0.3; // Width of each item

const data = [
    { range: 'Under 1.0L', value: 70 },
    { range: '1.1L - 1.6L', value: 54 },
    { range: '1.7L - 2.0L', value: 90 },
    { range: '2.1L - 2.5L', value: 90 },
    { range: '2.6L - 3.0L', value: 22 },
    { range: '3.1L - 3.5L', value: 35 },
    { range: '3.6L - 4.0L', value: 43 },
    { range: '4.1L - 4.5L', value: 4 },
];

const FeaturedCarScreen = () => {

    const [activeCarIndx, setActiveCarIndx] = useState(0);

    const handleScroll = (event) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / ITEM_WIDTH); // Calculate index correctly
        if (index >= 0 && index < data.length) {
            setActiveCarIndx(index);
        }
    };

    return (
        <View style={styles.container}>
            <Spacer height={SCREEN_HEIGHT * 0.05} />

            <View style={styles.viewAll}>
                <CustomText
                    subtitle
                    bold
                    color={themeColors.black} >
                    Featured  Cars
                </CustomText>
                <TouchableOpacity style={styles.viewAllLabel} onPress={() => { }} activeOpacity={0.6}>
                    <CustomText
                        body2
                        color={themeColors.white} >
                        View All
                    </CustomText>
                </TouchableOpacity>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                    paddingBottom: SCREEN_HEIGHT * 0.04,
                }}

                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <FeaturedCarItemCard
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
                onScroll={handleScroll}
                scrollEventThrottle={16}
                snapToAlignment="start"
                snapToInterval={ITEM_WIDTH + 10}
                decelerationRate="fast"
                getItemLayout={(data, index) => ({
                    length: ITEM_WIDTH,
                    offset: ITEM_WIDTH * index,
                    index,
                })}
            />
            {/* <View style={styles.dotContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeCarIndx === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View> */}
        </View>
    )
}

export default FeaturedCarScreen

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
        justifyContent:'center'
    }
})