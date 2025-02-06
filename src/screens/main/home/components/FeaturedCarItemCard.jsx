import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'
import { IMAGES } from '../../../../assets/images'
import { CalenderIcon, CylinderIcon, Kilometer, MonthIndicatorIcon } from '../../../../assets/svgs'

const FeaturedCarItemCard = ({ item, index, onClick, activeIndx }) => {

    return (
        <TouchableOpacity style={[styles.container,]} onPress={onClick} activeOpacity={0.6}>
            <Image source={IMAGES.carTestLogo} style={styles.img} />
            <View style={styles.labelsView}>
                <View>
                    <CustomText color={themeColors.black} subtitle >Frod raptor </CustomText>
                    <CustomText color={themeColors.label} body2 >3.0 TFSI Quattro </CustomText>
                </View>
                <Image source={IMAGES.brandTestLogo} />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.footer}>
                <View style={styles.row}>
                    <CalenderIcon />
                    <CustomText color={themeColors.black400} semiBold body2 >2021 </CustomText>
                </View>
                <View style={styles.row}>
                    <CylinderIcon />
                    <CustomText color={themeColors.black400} semiBold body2 >6 Cylinder</CustomText>
                </View>
                <View style={styles.row}>
                    <Kilometer />
                    <CustomText color={themeColors.black400} semiBold body2 >34,804 KM</CustomText>
                </View>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.footer}>
                <View style={styles.row}>
                    <CustomText color={themeColors.primary} semiBold body2 >QR. 369,000 </CustomText>
                </View>
                <View style={styles.row}>
                    <CustomText color={'#0BA645'} semiBold body2 >QR. 15,232/month</CustomText>
                    <MonthIndicatorIcon />
                </View>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
        </TouchableOpacity>
    )
}

export default FeaturedCarItemCard

const styles = StyleSheet.create({


    container: {
        width: SCREEN_WIDTH * 0.8,
        marginRight: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: themeColors.secondary
    },
    img: {
        //    width:SCREEN_WIDTH*0.8,
        borderRadius: 8,
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
        alignItems:'center'
    }

})
