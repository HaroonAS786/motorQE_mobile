import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT } from '../../../config/typography'

const OnboardCard = ({ item, index, activeIndex, setActiveIndex }) => {
    
    const handlePress = () => {
        setActiveIndex(index);
    }

    return (
        <TouchableOpacity 
            style={[
                styles.container,
                {
                    borderColor: activeIndex === index ? themeColors.secondary : 'transparent',
                    borderWidth: activeIndex === index ? 1 : 0
                }
            ]}
            activeOpacity={0.6}
            onPress={handlePress}
        >
            <View style={styles.leftView}>
                <CustomText subtitle color={themeColors.black}>{item?.label}</CustomText>
                <CustomText body medium color={themeColors.label}>{item?.description}</CustomText>
            </View>
            <Image
                source={item.img}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

export default OnboardCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginBottom: 18,
        backgroundColor: '#0C0CB80A',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: SCREEN_HEIGHT * 0.18, // Adjust height dynamically
    },
    leftView: {
        padding: 20,
        gap: 10,
        width: '50%',
    },
    image: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        width: '50%',  // Keep it half of the container width
        height: '100%', // Make image height match container height
    }
})
