import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import LayoutContainer from '../../../components/LayoutContainer'
import { getStyles } from './ViewCarListingScreen.style'
import { navigationRef } from '../../../navigations/RootNaviagtion'
import Spacer from '../../../components/Spacer'
import { SCREEN_HEIGHT } from '../../../config/typography'
import SearchBar from '../../../components/SeacrhBar'
import CarListingHeader from './components/CarListingHeader'
import { themeColors } from '../../../config/colors'
import CustomText from '../../../components/CustomText'
import AllCarsScreen from './allCars/AllCarsScreen'
import UsedCarScreen from './usedCars/UsedCarScreen'
import NewCarsScreen from './newCars/NewCarsScreen'

const tabViewData = ["All Cars", "Used Cars", "New Cars"]

const ViewCarListingScreen = (props) => {

    const styles = getStyles()
    const [searchValue, setSearchValue] = useState("");
    const [activeIndex, setActiveIndex] = useState(0)

    const renderView = useCallback(() => {
        if (activeIndex == 0) {
            return (
                <AllCarsScreen />
            );
        } else if (activeIndex == 1) {
            return (
                <UsedCarScreen />
            );
        }
        else {
            return (
                <NewCarsScreen />
            );
        }
    }, [
        activeIndex,
    ]);

    return (
        <LayoutContainer noHeight scrollEnable={false}>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <SearchBar
                value={searchValue}
                placeholder={"Search your favorite car"}
                onChangeText={(val) => {
                    setSearchValue(val);
                }}
            />
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <CarListingHeader />
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.container}>
                <View style={styles.containerTab}>
                    <View style={styles.carsCon}>
                        {tabViewData.map((val, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.labels,
                                        {
                                            borderBottomColor:
                                                index === activeIndex
                                                    ? themeColors.secondary
                                                    : "white",
                                            borderBottomWidth: 3,
                                        },
                                    ]}
                                >
                                    <CustomText
                                        onClick={() => setActiveIndex(index)}
                                        color={
                                            index === activeIndex
                                                ? themeColors.secondary
                                                : themeColors.primary
                                        }
                                        semiBold={index === activeIndex}
                                    >{`${val}`}</CustomText>
                                </View>
                            );
                        })}
                        <Spacer height={SCREEN_HEIGHT * 0.03} />
                    </View>
                    {renderView()}
                </View>
            </View>


        </LayoutContainer >
    )
}

export default ViewCarListingScreen