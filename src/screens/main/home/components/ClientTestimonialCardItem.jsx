import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'
import { IMAGES } from '../../../../assets/images'
import { CalenderIcon, CylinderIcon, InvertCommasLeftIcon, InvertCommasRightIcon, Kilometer, MonthIndicatorIcon } from '../../../../assets/svgs'
import ItemSeparator from '../../../../components/ItemSeparator'

const ClientTestimonialItemCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container,]} onPress={onClick} activeOpacity={0.6}>
            <Image source={IMAGES.carTestLogo} style={styles.img} />
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.footer}>
                <InvertCommasLeftIcon />
                <View style={styles.row}>
                    <CustomText color={themeColors.black400} style={{ width: '90%', textAlign: 'center' }} semiBold body2 >The great thing is that  motorqe
                        has made the entire process hassle-free for us</CustomText>
                </View>
                <InvertCommasRightIcon />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <ItemSeparator style={{ backgroundColor: 'lightgrey' }} />
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={{ alignItems: 'center' }}>
                <CustomText color={'#997A7A'}
                    body2 >
                    Shakeel al-Hannan
                </CustomText>
                <CustomText color={'#6F4C4C'}
                    semiBold body2 >
                    Mercedes S560
                </CustomText>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
        </TouchableOpacity>
    )
}

export default ClientTestimonialItemCard

const styles = StyleSheet.create({


    container: {
        width: SCREEN_WIDTH * 0.8,
        marginRight: 12,
        borderRadius: 8,
        backgroundColor: '#F9F9F9',
        borderColor: '#EEEAEA',
        borderWidth: 1
    },
    img: {
        height: SCREEN_HEIGHT * 0.2,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    labelsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }

})
