import React, { useState } from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../../assets/images';
import Button from '../../../components/Button';
import CustomText from '../../../components/CustomText';
import LayoutContainer from '../../../components/LayoutContainer';
import SearchBar from '../../../components/SeacrhBar';
import Spacer from '../../../components/Spacer';
import { themeColors } from '../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography';
import { getStyles } from './HomeScreen.style';
import CarByBodyScreen from './components/CarByBodyScreen';
import SearchByYearScreen from './components/SearchByYearScreen';
import SearchByBrandScreen from './components/SeacrhByBrandScreen';
import SearchForCarEngineScreen from './components/SearchForCarEngineScreen';
import SearchCarByBudgetScreen from './components/SearchCarByBudgetScreen';
import FeaturedShowRoomScreen from './components/FeaturedShowRoomScreen';
import FeaturedCarScreen from './components/FeaturedCarScreen';
import RentCarScreen from './components/RentCarScreen';
import MoreCarBannerCard from './components/MoreCarCard';
import ClientTestimonialScreen from './components/ClientTestimonialsScreen';

const HomeScreen = () => {

    const [searchValue, setSearchValue] = useState("");
    const styles = getStyles()

    return (
        <LayoutContainer noHeight>
            <SearchBar
                value={searchValue}
                placeholder={"Search"}
                onChangeText={(val) => {
                    setSearchValue(val);
                }}
            />
            <Spacer height={SCREEN_HEIGHT * 0.04} />
            <View style={{ width: SCREEN_WIDTH }}>
                <Image source={IMAGES.sellBuyCar} style={styles.image} />
                <LinearGradient
                    colors={['transparent', '#0C0CB8']} // Transparent to black
                    style={styles.overlay}
                />
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 20 }}>
                    <CustomText
                        style={{ alignSelf: 'center', textAlign: 'center', width: '80%' }}
                        color={themeColors.white}
                        semiBold h3>
                        Sell or Buy  a car in Qatar hassle free within your own comfort
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <Button
                        // loading={isLoading}
                        buttonTextColor={"#0C0CB8"}
                        label={"Know More"}
                        buttonContainerStyle={styles.btnContainer}
                    // onPress={handleLogin}
                    />
                </View>
            </View>
            <CarByBodyScreen />
            <SearchByYearScreen />
            <SearchByBrandScreen />
            <SearchForCarEngineScreen />
            <SearchCarByBudgetScreen />
            <FeaturedShowRoomScreen />
            <FeaturedCarScreen />
            <RentCarScreen />
            <ClientTestimonialScreen />
            <MoreCarBannerCard />
        </LayoutContainer>
    )
}

export default HomeScreen