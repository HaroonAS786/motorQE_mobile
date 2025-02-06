import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import SearchByBrandItemCard from './SeacrhByBrandItemCard';
import SearchCarByBudgetItemCard from './SearchCarByBudgetItemCard';
import FeaturedShowRoomItemCard from './FeaturedShowRoomItemCard';

const ITEM_WIDTH = SCREEN_WIDTH * 0.3; // Width of each item
const data = [
    { range: 'Under QAR 10,000', value: 70 },
    { range: 'QAR 11,000 - 15,000', value: 54 },
    { range: 'QAR 60,000 - 80,000', value: null }, // Assuming no value is provided
    { range: 'QAR 3,00,000 - 4,00,000', value: 22 },
    { range: 'QAR 4,00,000 - 5,00,000', value: 35 },
    { range: 'QAR 5,00,000 - 6,00,000', value: 30 },
  ];

const FeaturedShowRoomScreen = () => {

    const [activeCarIndx, setActiveCarIndx] = useState(0);

    const handleScroll = (event) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / ITEM_WIDTH); // Calculate index correctly
        if (index >= 0 && index < [0, 1, 2, 3, 4].length) {
            setActiveCarIndx(index);
        }
    };

    return (
        <View style={styles.container}>
            <Spacer height={SCREEN_HEIGHT * 0.05} />
            <CustomText
                subtitle
                bold
                color={themeColors.black} >
                Featured Showroom
            </CustomText>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                    paddingBottom: SCREEN_HEIGHT * 0.04,
                }}

                data={[0, 1, 2, 3, 4]}
                renderItem={({ item, index }) => {
                    return (
                        <FeaturedShowRoomItemCard
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
                scrollEventThrottle={16} // Smooth updates
                snapToAlignment="start"
                snapToInterval={ITEM_WIDTH + 10} // Adjust for spacing
                decelerationRate="fast"
                getItemLayout={(data, index) => ({
                    length: ITEM_WIDTH,
                    offset: ITEM_WIDTH * index,
                    index,
                })}
            />
            <View style={styles.dotContainer}>
                {[0, 1, 2, 3, 4].map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeCarIndx === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

export default FeaturedShowRoomScreen

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
