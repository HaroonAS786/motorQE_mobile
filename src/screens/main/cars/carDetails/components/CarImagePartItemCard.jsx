import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { IMAGES } from '../../../../../assets/images'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config/typography'
import { themeColors } from '../../../../../config/colors'



const CarImagePartItemCard = ({ item, index, onClick }) => {

    return (
        <TouchableOpacity style={[styles.container]} onPress={onClick} activeOpacity={0.6}>
            <View style={{  width: '100%', height: '100%',justifyContent:'center',alignItems:'center' }}>
                <Image source={IMAGES.testCarLogo}  />
            </View>

            {/* <LinearGradient
                colors={['transparent', '#484848']} // Transparent to black
                style={styles.overlay}
            /> */}
        </TouchableOpacity>
    )
}

export default CarImagePartItemCard

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.3,
        marginRight: 16,
        borderRadius: 8,
        borderWidth: 0.3,
        borderColor: 'grey',
        padding: 22,
    },

    overlay: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        borderRadius: 8,
        left: 0,
        right: 0
    },

})
