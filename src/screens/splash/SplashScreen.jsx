import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import { themeColors } from '../../config/colors';
import { navigationRef } from '../../navigations/RootNaviagtion';
import { getStyles } from './SplashScreen.style';
import CustomText from '../../components/CustomText';
import { IMAGES } from '../../assets/images';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/typography';

const SplashScreen = () => {

    const styles = getStyles()

    useEffect(() => {
        setTimeout(() => {
            navigationRef.navigate("OnBoardScreen")
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={IMAGES.splashLogo} />
            <CustomText h6 bold style={{position:'absolute',top:SCREEN_HEIGHT*0.56}}>Dream.Buy.Drive</CustomText>
        </View>
    );
};

export default SplashScreen;
