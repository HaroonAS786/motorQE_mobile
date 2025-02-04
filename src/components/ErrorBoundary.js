import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { WarningIcon } from '../assets/svgs';
import { themeColors } from '../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography';
import Button from './Button';
import CustomText from './CustomText';
import LayoutContainer from './LayoutContainer';
import Spacer from './Spacer';
import RNRestart from 'react-native-restart';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, 'error----');
    }

    handleBackToSignIn = async () => {
        RNRestart.Restart();
    };

    render() {
        if (this.state.hasError) {
            return (
                <LayoutContainer style={styles.mainCont}>
                    <Spacer height={SCREEN_HEIGHT * 0.2} />
                    <View style={styles.iconCont}>
                        <WarningIcon height={'100%'} width={'100%'} />
                    </View>
                    <View
                        style={{
                            width: SCREEN_WIDTH * 0.85,
                        }}>
                        <Spacer height={SCREEN_HEIGHT * 0.02} />
                        <CustomText
                            color={themeColors.black}
                            h4
                            semiBold
                        >
                            Oops, Something Went Wrong!
                        </CustomText>
                        <Spacer height={SCREEN_HEIGHT * 0.02} />
                        <CustomText
                            color={themeColors.black}
                            body
                            medium
                        >
                            {`Error : ${this.state.errorMessage}`}
                            {/* The app ran into a problem and could not continue. We apologise
                            for any inconvenience this has caused! Press the button below to
                            restart the app. Please contact us if this issue persists. */}
                        </CustomText>
                        <Spacer height={SCREEN_HEIGHT * 0.04} />
                        <Button

                            label={'Restart App'}
                            onPress={() => this.handleBackToSignIn()}
                            buttonContainerStyle={{
                                marginVertical: 15,
                            }}
                        />
                    </View>
                </LayoutContainer>
            );
        } else return this.props.children
    }
}


const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.lightBackground,
    },
    iconCont: {
        width: SCREEN_WIDTH * 0.3,
        height: SCREEN_HEIGHT * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: SCREEN_HEIGHT * 0.03,
    },
});


export default ErrorBoundary;


