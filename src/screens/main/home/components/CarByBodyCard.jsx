import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IMAGES } from '../../../../assets/images'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'

const CarByBodyCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: index === activeIndx ? "#3C5FCA" : "lightgrey" }]} onPress={onClick} activeOpacity={0.6}>
            <View style={index === activeIndx ? styles.checkBox : styles.defaultCheck}>
                {index === activeIndx && <View style={styles.tickMark} />}
            </View>

            <>
                <Spacer height={SCREEN_HEIGHT * 0.01} />
                <Image source={IMAGES.testCarLogo} style={styles.img}/>
                <CustomText body semiBold color={themeColors.primary}>SUV</CustomText>
            </>
        </TouchableOpacity>
    )
}

export default CarByBodyCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: SCREEN_WIDTH * 0.3,
        height: SCREEN_HEIGHT * 0.1,
        marginRight: 16,
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    img: {
        width: 70, height: 26
    },
    checkBox: {
        borderRadius: 100,
        width: 20,
        height: 20,
        borderWidth: 1,
        backgroundColor: "#3C5FCA",
        borderColor: 'lightgrey',
        position: 'absolute',
        left: 6,
        top: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultCheck: {
        borderRadius: 100,
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        position: 'absolute',
        left: 6,
        top: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tickMark: {
        width: 5,
        height: 8,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white',
        transform: [{ rotate: '45deg' }],
    }
})
