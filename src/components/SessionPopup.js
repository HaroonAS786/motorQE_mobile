import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SCREEN_WIDTH } from '../config/typography';
import { sessionExpired, signOut } from '../redux/actions';
import { deleteData } from "../utilities/storage";
import Button from './Button';

const SessionTimeOut = () => {

    const authState = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={authState?.isSessionExpire}
        >
            <View style={styles.modalContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>Session Expired</Text>
                    <Text style={styles.bodyText}>
                        Your session has expired. Please log in again.
                    </Text>
                    <Button
                        label={"Retry"}
                        buttonContainerStyle={styles.retryBtn}
                        onPress={() => {
                            dispatch(signOut())
                            deleteData("accessToken")
                            dispatch(sessionExpired(false))
                        }}
                    />
                </View>
            </View>
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
    retryBtn: {
        width: SCREEN_WIDTH * 0.4,
        height: 44,
        padding: 0
    },
});

export default SessionTimeOut;