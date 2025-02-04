import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';

import { themeColors } from "../config/colors";
import { SCREEN_WIDTH } from '../config/typography';
import Button from './Button';
import Spacer from './Spacer';

const LogoutPopup = ({ visible, onCancel, onYes, loader, toggleModal }) => {

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={() => toggleModal()}
            animationIn={"bounceInUp"}
            transparent={true}
            hasBackdrop={true}
            style={{
                margin: 0,
            }}
        >
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.titleText}>{'Logout Confirmation'}</Text>
                        <Text style={styles.bodyText}>
                            {`Are you sure you want to logout?`}
                        </Text>
                        <View style={styles.footer}>
                            <Button label={"No"}
                                onPress={onCancel}
                                buttonContainerStyle={styles.noBtn}
                            />
                            <Spacer width={SCREEN_WIDTH * 0.02} />
                            <Button label={"Yes"}
                                onPress={onYes}
                                buttonContainerStyle={styles.yesBtn}
                                loading={loader}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bodyText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: themeColors.primary, // Make sure themeColors is defined
        padding: 10,
        borderRadius: 5,
    },
    retryButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    noBtn: {
        width: SCREEN_WIDTH * 0.3,
        height: 44,
        padding: 0
    },
    yesBtn: {
        width: SCREEN_WIDTH * 0.3,
        height: 44,
        padding: 0,
        backgroundColor: '#BA1A1A'
    }
});

export default LogoutPopup;