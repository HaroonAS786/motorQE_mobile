import React from 'react';
import { FlatList, Image, Platform, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LayoutContainer from '../../../../components/LayoutContainer';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import { navigationRef } from '../../../../navigations/RootNaviagtion';
import { IMAGES } from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import CarImagePartItemCard from './components/CarImagePartItemCard';
import { MonthIndicatorIcon } from '../../../../assets/svgs';
import Button from '../../../../components/Button';
import { aboutCarData, carConditions, faqs, spareParts, spareSpecificationParts } from '../../../../utils/helperFunctions';
import AboutCar from './components/AboutCar';
import SparePartCar from './components/SparePart';
import FeatureSpecification from './components/FeatureSpecificationsCard';
import CarCondition from './components/CarConditions';
import FaqsCard from './components/Faqs';
import AddToCompare from './components/AddToCompare';


const CarDetailScreen = () => {

    return (
        <LayoutContainer noHeight headerTitle={"Details"} isHeader backOnPress={() => navigationRef.goBack()}>
            <Spacer height={SCREEN_HEIGHT * 0.03} />
            <View style={styles.imgCon}>
                <Image style={styles.img} source={IMAGES.carTestLogo} />
                <LinearGradient
                    colors={['transparent', '#000']} // Transparent to black
                    style={styles.overlay}
                />
                <View style={styles.noOfImages}>
                    <CustomText color={themeColors.black300} body2 semibold> 5/11</CustomText>
                </View>
            </View>
            <View style={styles.container}>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    // contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * 0.5 }}
                    horizontal
                    data={[0, 1, 2, 3]}
                    renderItem={({ item, index }) => {
                        return (
                            <CarImagePartItemCard
                                item={item}
                                index={index}
                                key={index}
                                onClick={() => {
                                    //    navigationRef.navigate('CarDetailScreen')
                                }}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View>
                    <CustomText color={themeColors.black} semiBold body >Landrover Defender</CustomText>
                    <CustomText color={themeColors.label} body2 >90 S P300</CustomText>
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
                <Button
                    // loading={isLoading}
                    buttonTextColor={themeColors.secondary}
                    label={"Notify when price drops"}
                    buttonContainerStyle={styles.btnContainer}
                // onPress={handleLogin}
                />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.04} />
            <View style={{ width: SCREEN_WIDTH }}>
                <CustomText color={themeColors.black} style={{ paddingLeft: 16 }} semiBold bold={Platform.OS === "android"} body>About this Car</CustomText>
                {
                    aboutCarData.map((val, indx) => <AboutCar item={val} indx={indx} key={indx} />)
                }
                <Spacer height={SCREEN_HEIGHT * 0.04} />
                <CustomText color={themeColors.black} style={{ paddingLeft: 16 }} semiBold bold={Platform.OS === "android"} body>Spare Parts & Tyres</CustomText>
                {
                    spareParts.map((val, indx) => <SparePartCar item={val} indx={indx} key={indx} />)
                }
                <Spacer height={SCREEN_HEIGHT * 0.04} />
                <CustomText color={themeColors.black} style={{ paddingLeft: 16 }} semiBold bold={Platform.OS === "android"} body>Features & specifications</CustomText>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                {
                    spareSpecificationParts.map((val, indx) => <FeatureSpecification item={val} indx={indx} key={indx} />)
                }
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <Button
                    // loading={isLoading}
                    buttonTextColor={themeColors.secondary}
                    label={"View all features & specs"}
                    buttonContainerStyle={styles.featureBtn}
                // onPress={handleLogin}
                />
                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <CustomText color={themeColors.black} style={{ paddingLeft: 16 }} semiBold bold={Platform.OS === "android"} body>Car Condition</CustomText>
                {
                    carConditions.map((val, indx) => <CarCondition item={val} indx={indx} key={indx} />)
                }
                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <CustomText color={themeColors.black} style={{ paddingLeft: 16 }} semiBold bold={Platform.OS === "android"} body>Faqs</CustomText>
                {
                    faqs.map((val, indx) => <FaqsCard item={val} indx={indx} key={indx} />)
                }
                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <AddToCompare />
                <Spacer height={SCREEN_HEIGHT * 0.08} />
            </View>

        </LayoutContainer>
    )
}

export default CarDetailScreen

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
    },
    img: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.3,
    },
    imgCon: {
        height: SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH,
        backgroundColor: 'red'
    },
    noOfImages: {
        backgroundColor: 'white',
        width: '20%',
        padding: 14,
        borderRadius: 16,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 16,
        left: 12
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%', // Adjust opacity height
    },

    labelsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    btnContainer: {
        backgroundColor: themeColors.white,
        borderWidth: 1,
        borderColor: themeColors.secondary
    },
    featureBtn: {
        backgroundColor: themeColors.white,
        borderWidth: 1,
        borderColor: themeColors.secondary,
        marginHorizontal: 16,
    },
})
