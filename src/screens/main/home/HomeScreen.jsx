import React, { useState } from 'react'
import LayoutContainer from '../../../components/LayoutContainer'
import SearchBar from '../../../components/SeacrhBar'
import { Image, View } from 'react-native';
import { IMAGES } from '../../../assets/images';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography';
import CustomText from '../../../components/CustomText';
import { themeColors } from '../../../config/colors';
import Button from '../../../components/Button';
import { getStyles } from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../../../components/Spacer';


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
                    // setResetSearch(val);
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
            <View style={styles.container}>
                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <CustomText
                    subtitle
                    bold
                    color={themeColors.black} >
                    Car by body type
                </CustomText>
            </View>
        </LayoutContainer>
    )
}

export default HomeScreen