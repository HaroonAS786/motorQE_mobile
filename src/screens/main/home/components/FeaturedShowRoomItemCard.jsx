import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { IMAGES } from '../../../../assets/images'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'

const FeaturedShowRoomItemCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: index === activeIndx ? themeColors.label : '#F9F9F9' }]} onPress={onClick} activeOpacity={0.6}>
            <Image source={IMAGES.showRoomTestLogo} />
        </TouchableOpacity>
    )
}

export default FeaturedShowRoomItemCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: SCREEN_WIDTH * 0.28,
        height: SCREEN_HEIGHT * 0.1,
        marginRight: 16,
        borderWidth: 1,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    label: {
        position: 'absolute',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 24, bottom: 0
    }
})
