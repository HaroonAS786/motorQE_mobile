import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ScreenOptions } from '../utils/anim';
import LoginScreen from '../screens/authentication/loginScreen/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = props => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      {/* <Stack.Screen
        name={'SignUpScreen'}
        component={SignUpScreen}
        options={{gestureEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
        options={{gestureEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={'ResetPasswordScreen'}
        component={ResetPasswordScreen}
        options={{gestureEnabled: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
