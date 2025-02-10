import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CarCompareIcon } from '../../../../../assets/svgs'
import Button from '../../../../../components/Button'
import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config/typography'

const AddToCompare = () => {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                <CustomText color={themeColors.label} body style={{ width: "90%" }} >
                    You can now add this car for comparing different features and specification
                </CustomText>
                <Button
                    // loading={isLoading}
                    buttonTextColor={themeColors.secondary}
                    label={"ADD TO COMPARE"}
                    buttonContainerStyle={styles.featureBtn}
                // onPress={handleLogin}
                />
            </View>
            <View style={styles.rightViewCon}>
                <View style={styles.rightView}>
                    <CarCompareIcon width={40} height={40} />
                </View>
            </View>
        </View>
    )
}

export default AddToCompare

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftView: {
        alignItems: 'center',
        gap: 15, flex: 1
    },
    rightViewCon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rightView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 100,
        width: 100,
        borderRadius: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    featureBtn: {
        backgroundColor: themeColors.white,
        borderWidth: 1,
        borderColor: themeColors.secondary,
        // marginHorizontal: 16,
        // width: '50%'
    },
})