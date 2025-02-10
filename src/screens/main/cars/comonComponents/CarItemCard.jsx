import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IMAGES } from '../../../../assets/images'
import { CalenderIcon, Car360MeasureIcon, CylinderIcon, FavoriteIcon, InspectedIcon, Kilometer, ListIcon, MessageIcon, MonthIndicatorIcon, TimeAgoIcon } from '../../../../assets/svgs'
import PhoneIcon from '../../../../assets/svgs/Phone'
import WhatsappCallIcon from '../../../../assets/svgs/WhatsappCall'
import CustomText from '../../../../components/CustomText'
import ItemSeparator from '../../../../components/ItemSeparator'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT } from '../../../../config/typography'

const FeaturedCarItemCard = ({ item, index, onClick }) => {

    return (
        <TouchableOpacity style={[styles.container,]} onPress={onClick} activeOpacity={0.6}>
            <View>
                <Image source={IMAGES.carTestLogo} style={styles.img} />
                <TouchableOpacity style={styles.favoriteIconLabel}>
                    <FavoriteIcon />
                </TouchableOpacity>
                <View style={styles.measure360IconLabel}>
                    <Car360MeasureIcon />
                </View>
            </View>

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
                    <CustomText color={'#0BA645'} semiBold body2 >QR. 15,232/month</CustomText>
                    <MonthIndicatorIcon />
                </View>
                <View style={styles.row}>
                    <CustomText color={themeColors.primary} semiBold body2 >QR. 369,000 </CustomText>
                </View>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.footer}>
                <View style={styles.row}>
                    <InspectedIcon />
                    <ListIcon />
                </View>
                <View style={styles.row}>
                    <CustomText color={themeColors.label} semiBold body2 >2 hours ago </CustomText>
                    < TimeAgoIcon />
                </View>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <ItemSeparator style={{ marginHorizontal: 16 }} />
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.footer2}>
                <TouchableOpacity style={styles.call}>
                    <PhoneIcon />
                    <CustomText color={themeColors.white} semiBold body2 >Call </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.message}>
                    <MessageIcon />
                    <CustomText color={themeColors.white} semiBold body2 >Chat </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whatsapp}>
                    <WhatsappCallIcon />
                    <CustomText color={themeColors.white} semiBold body2 >Whatsapp </CustomText>
                </TouchableOpacity>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.featureLabel}>
                <CustomText color={themeColors.white} semiBold body2 >Featured </CustomText>
            </View>

        </TouchableOpacity>
    )
}

export default FeaturedCarItemCard

const styles = StyleSheet.create({


    container: {
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: themeColors.secondary
    },
    img: {
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
    footer2: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        gap: 10
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    call: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        backgroundColor: '#0C0CB8',
        justifyContent: 'center',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 6,
        flex: 1
    },
    message: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        backgroundColor: '#FB5722',
        justifyContent: 'center',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 6,
        flex: 1
    },
    whatsapp: {
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 6,
        flex: 1
    },
    featureLabel: {
        borderRadius: 100,
        padding: 4,
        width: '30%',
        alignItems: 'center',
        position: 'absolute',
        right: 12,
        top: 12
    },
    favoriteIconLabel: {
        borderRadius: 100,
        padding: 4,
        alignItems: 'center',
        position: 'absolute',
        right: 12,
        bottom: 16
    },
    measure360IconLabel: {
        borderRadius: 100,
        padding: 4,
        alignItems: 'center',
        position: 'absolute',
        left: 12,
        bottom: 16
    }

})
