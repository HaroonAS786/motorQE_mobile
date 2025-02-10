import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import LayoutContainer from '../../../components/LayoutContainer'
import { getStyles } from './MoreScreen.style'
import MoreItemCard from './components/MoreItemCar'
import ItemSeparator from '../../../components/ItemSeparator'
import { SCREEN_HEIGHT } from '../../../config/typography'
import Spacer from '../../../components/Spacer'
import { moreArray } from '../../../utils/helperFunctions'
import { IMAGES } from '../../../assets/images'

const MoreScreen = () => {

    const styles = getStyles()

    return (
        <LayoutContainer noHeight >
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View
                style={{ alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={IMAGES.headerLogo}
                />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.03} />
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={moreArray}
                    renderItem={({ item, index }) => {
                        return <MoreItemCard key={index} item={item} index={index} />
                    }}
                    ItemSeparatorComponent={ItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.05} />
        </LayoutContainer>
    )
}

export default MoreScreen