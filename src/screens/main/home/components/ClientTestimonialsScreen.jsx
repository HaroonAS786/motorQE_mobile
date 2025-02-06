import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import FeaturedCarItemCard from './FeaturedCarItemCard';
import ClientTestimonialItemCard from './ClientTestimonialCardItem';

const ITEM_WIDTH = SCREEN_WIDTH * 0.3; // Width of each item

const ClientTestimonialScreen = () => {

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

            <View style={styles.viewAll}>
                <CustomText
                    subtitle
                    bold
                    color={themeColors.black} >
                    Our Customer Testimonials
                </CustomText>
            </View>
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
                        <ClientTestimonialItemCard
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
            <View style={styles.dotContainer}>
                {[0,1,2,3,4].map((_, index) => (
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

export default ClientTestimonialScreen

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
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