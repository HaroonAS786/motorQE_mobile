import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { IMAGES } from '../../assets/images'
import Button from '../../components/Button'
import CustomText from '../../components/CustomText'
import LayoutContainer from '../../components/LayoutContainer'
import Spacer from '../../components/Spacer'
import { themeColors } from '../../config/colors'
import { SCREEN_HEIGHT } from '../../config/typography'
import { navigationRef } from '../../navigations/RootNaviagtion'
import { OnBoardData } from '../../utils/helperFunctions'
import { getStyles } from './OnBoardScreem.style'
import OnboardCard from './components/OnboardCard'

const OnBoardScreen = () => {

    const styles = getStyles()
    const [activeIndex, setActiveIndex] = useState(null); // Stores the selected card index

    const handleContinue = () => {
        navigationRef.navigate("InitialStack")
    }

    return (
        <LayoutContainer noHeight scrollEnable={false} >
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View
                style={{ alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={IMAGES.headerLogo}
                />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.05} />
            <CustomText color={themeColors.label} h6>What would you like to do?</CustomText>
            <Spacer height={SCREEN_HEIGHT * 0.05} />
            <View style={styles.container}>
                {
                    OnBoardData?.map((val, indx) => {
                        return (
                            <OnboardCard
                                item={val}
                                key={indx}
                                index={indx}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            />
                        )
                    })
                }
                <Spacer height={SCREEN_HEIGHT * 0.05} />
                <Button
                    disabled={activeIndex == null}
                    label={"CONTINUE"}
                    onPress={handleContinue}
                />
            </View>

        </LayoutContainer>
    )
}

export default OnBoardScreen