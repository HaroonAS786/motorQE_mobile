import {createStackNavigator} from '@react-navigation/stack';
import {createContext, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppState} from 'react-native';
// import {continueSession, signOut} from '../redux/actions';

import {ScreenOptions, screenAnimation} from '../utils/anim';
// import {getUserAccessToken, saveData} from '../utils/storage';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import SplashScreen from '../screens/splash/SplashScreen';
import OnBoardScreen from '../screens/onBoard/OnBoardScreen';

const Stack = createStackNavigator();
export const AuthContext = createContext();

const InitialStack = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.AuthReducer);

  const appState = useRef(AppState.currentState);

  // useEffect(() => {
  //     // Function to handle app state changes
  //     const handleAppStateChange = (nextAppState) => {
  //         checkAppActivity(nextAppState); // Your custom function
  //         appState.current = nextAppState;
  //     };

  //     // Check initial state when component mounts
  //     checkAppActivity(appState.current);

  //     // Add event listener for app state changes
  //     const subscription = AppState.addEventListener(
  //         "change",
  //         handleAppStateChange
  //     );

  //     // Cleanup the subscription
  //     return () => {
  //         subscription.remove();
  //     };
  // }, []);

  // useEffect(() => {
  //     setTimeout(() => {
  //         SplashScreen.hide();
  //     }, 3000);

  //     const handleNav = () => {
  //         const userToken = getUserAccessToken();
  //         if (userToken) {
  //             dispatch(continueSession(userToken));
  //         } else {
  //             dispatch(signOut());
  //         }
  //     };
  //     handleNav();
  // }, []);

  return (
    <AuthContext.Provider value={authState}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animations: screenAnimation,
        }}>
        {/* {authState?.userToken ? ( */}
        {false ? (
          <Stack.Screen
            options={{gestureEnabled: false}}
            component={MainStack}
            name="MainStack"
          />
        ) : (
          <Stack.Screen
            options={{gestureEnabled: false}}
            component={AuthStack}
            name="AuthStack"
          />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={ScreenOptions}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name={'SplashScreen'}
        options={{gestureEnabled: false}}
        component={SplashScreen}
      />
      <Stack.Screen
        name={'OnBoardScreen'}
        options={{gestureEnabled: false}}
        component={OnBoardScreen}
      />
      <Stack.Screen
        name={'InitialStack'}
        options={{gestureEnabled: false}}
        component={InitialStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
