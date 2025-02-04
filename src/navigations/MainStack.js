import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// import CustomBottomTabBar from '../components/CustomBottomBar';
import { ScreenOptions } from '../utils/anim';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        // tabBar={props => <CustomBottomTabBar {...props} />}
        detachInactiveScreens={true}
        screenOptions={ScreenOptions}>
        {/* <Tab.Screen
          options={{gestureEnabled: false}}
          name={'HomeScreen'}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'ViewGroupOffersScreen'}
          component={ViewGroupOffersScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'AddButton'}
          component={View}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'CartScreen'}
          component={CartScreen}
        />
        <Tab.Screen
          options={{gestureEnabled: false}}
          name={'AccountScreen'}
          component={AccountScreen}
        /> */}
      </Tab.Navigator>
    </>
  );
};


const MainStack = () => {

  return (
    <Stack.Navigator
      screenOptions={ScreenOptions}
      initialRouteName="HomeScreen">
      {/* <Stack.Screen name={'AgentBottomTabs'} component={AgentBottomTabs} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
