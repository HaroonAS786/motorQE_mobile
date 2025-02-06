import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IMAGES } from '../../../../assets/images'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'
import Button from '../../../../components/Button'
import Spacer from '../../../../components/Spacer'

const MoreCarBannerCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <View style={[styles.container]}>
            <Spacer height={SCREEN_HEIGHT * 0.05} />
            <Image source={IMAGES.sellMoreCar} style={styles.img} />
            <Button
                // loading={isLoading}
                buttonTextColor={"#fff"}
                label={"More Info"}
                buttonContainerStyle={styles.btnContainer}
            // onPress={handleLogin}
            />
        </View>
    )
}

export default MoreCarBannerCard

const styles = StyleSheet.create({


    container: {
        width: SCREEN_WIDTH,
    },
    img: {
        width: SCREEN_WIDTH,
    },
    btnContainer: {
        backgroundColor: "#0C0CB8",
        width: '45%',
        borderRadius: 100,
        right: 16,
        padding:10,
        top: SCREEN_HEIGHT * 0.09,
        position: "absolute"
    },
})
