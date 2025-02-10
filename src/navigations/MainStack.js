import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import CustomBottomTabBar from '../components/CustomBottomBar';
import {ScreenOptions} from '../utils/anim';
import HomeScreen from '../screens/main/home/HomeScreen';
import GarageScreen from '../screens/main/garages/GarageScreen';
import MoreScreen from '../screens/main/more/MoreScreen';
import {View} from 'react-native';
import ViewCarListingScreen from '../screens/main/cars/ViewCarListingScreen';
import CarDetailScreen from '../screens/main/cars/carDetails/CarDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        tabBar={props => <CustomBottomTabBar {...props} />}
        detachInactiveScreens={true}
        screenOptions={ScreenOptions}>
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'HomeScreen'}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'GarageScreen'}
          component={GarageScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'AddButton'}
          component={View}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'ViewCarListingScreen'}
          component={ViewCarListingScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'MoreScreen'}
          component={MoreScreen}
        />
      </Tab.Navigator>
    </>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      {/* <Stack.Screen name={'HomeScreen'} component={HomeScreen} /> */}
      <Stack.Screen name={'AppBottomTabs'} component={AppBottomTabs} />
      <Stack.Screen name={'CarDetailScreen'} component={CarDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
