import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { IMAGES } from '../assets/images'
import { themeColors } from '../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography'
import Button from './Button'
import CustomText from './CustomText'
import LayoutContainer from './LayoutContainer'
import Spacer from './Spacer'

const SuccessScreen = (props) => {

    const { label } = props.route.params ?? {}

    const redirectToLogin = () => {
        props.navigation.navigate("LoginScreen")
    }

    return (
        <>
            <LayoutContainer noHeight>
                <Spacer height={SCREEN_HEIGHT * 0.2} />
                <CustomText color={themeColors.black200} h4 semiBold style={styles.labelView}>{label}</CustomText>
                <View style={styles.container}>
                    <Spacer height={SCREEN_HEIGHT * 0.03} />
                    <View style={styles.imageCon}>
                        <Image
                            style={styles.image}
                            source={IMAGES.achievementIcon}
                        />
                    </View>
                </View>
            </LayoutContainer>
            <View style={styles.btnContainer}>
                <Button label={"Continue to Login"} onPress={redirectToLogin} />
                <Spacer height={SCREEN_HEIGHT * 0.01} />
            </View>
        </>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({

    image: {
        height: SCREEN_HEIGHT * 0.2
    },
    imageCon: {
        height: SCREEN_HEIGHT * 0.2
    },
    container: {
        paddingHorizontal: 16
    },
    btnContainer: {
        justifyContent: 'flex-end',
        backgroundColor: themeColors.white,
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

    labelView: {
        textAlign: 'center',
        width: '60%'
    }

})