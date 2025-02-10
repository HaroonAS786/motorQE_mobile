import React, {useCallback} from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

import {CarsIcon, GarageIcon, HomeIcon, MoreIcon} from '../assets/svgs';
import {themeColors} from '../config/colors';
import SellCarFloatButton from './SellCarFloatButton';

const CustomBottomTabBar = ({state, navigation}) => {
  const getIcon = (name, isFocused) => {
    switch (name) {
      case 'HomeScreen':
        return <HomeIcon />;
      case 'GarageScreen':
        return <GarageIcon  />;
      case 'AddButton':
        return <SellCarFloatButton onPress={() => {}} />;
      case 'ViewCarListingScreen':
        return <CarsIcon/>;
      case 'MoreScreen':
        return <MoreIcon  />;
    }
  };

  const renderTab = useCallback(
    (route, index) => {
      const isFocused = state.index === index;

      const onPress = () => {
        if (index !== 2) {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }
      };

      const animatedStyle = useAnimatedStyle(() => {
        const scale = withSpring(isFocused ? 1.05 : 1);
        return {transform: [{scale}]};
      });

      return (
        <Animated.View
          key={index}
          style={[
            styles.button,
            animatedStyle,
            {
              borderTopColor: isFocused
                ? index !== 2
                  ? themeColors.primary
                  : themeColors.white
                : null,
              borderTopWidth: isFocused ? 3 : 0,
            },
          ]}>
          <Pressable
            onPress={onPress}
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {getIcon(route.name, isFocused)}
            </View>
          </Pressable>
        </Animated.View>
      );
    },
    [state],
  );

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => renderTab(route, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: themeColors.white,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    height:'10%',
    paddingTop: 0,
    paddingBottom: Platform.OS === 'ios' ? 16 : 0,
  },
  button: {
    flex: 1,
    marginBottom: 14,
    paddingTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomBottomTabBar;
