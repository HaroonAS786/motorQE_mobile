import React from "react";
import { Text, TextInput } from "react-native";
import "react-native-gesture-handler";
import Router from "./src/router/Router";

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}

function App() {
    return <Router />;
}
export default App;
