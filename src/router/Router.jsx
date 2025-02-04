import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";

import ErrorBoundary from "../components/ErrorBoundary";
import { navigationRef } from "../navigations/RootNaviagtion";
import RootStack from "../navigations/RootStack";
import store from "../redux/store";

LogBox.ignoreAllLogs();

const Router = () => {

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <NavigationContainer ref={navigationRef} >
                    <RootStack />
                </NavigationContainer>
                {/* <FlashMessage /> */}
            </Provider>
        </ErrorBoundary>
    );
};

export default Router;
