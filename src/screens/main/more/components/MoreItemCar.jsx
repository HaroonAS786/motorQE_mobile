import React, { useCallback } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { DeleteAccountIcon } from '../../../../assets/svgs'
import Button from '../../../../components/Button'
import CustomModal from '../../../../components/CustomModal'
import CustomText from '../../../../components/CustomText'
import ItemSeparator from '../../../../components/ItemSeparator'
import LogoutPopup from '../../../../components/LogoutPopup'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'

const MoreItemCard = ({ item, index, }) => {


    const handlePress = (item) => {
        switch (item.label) {
            case "Find a Garage & other service providers":

                break;
            case "Showrooms":

                break;
            case "News":

                break
            case "FAQS":

                break;
            case "About Us":

                break;
            case "Inspect Cars":

                break;
            case "Imported Cars":

                break;
            case "New Cars":

                break;
            case "Used Cars":

                break;
            case "Contact us":

                break;
            case "Terms & Conditions":

                break;
            case "Privacy Policy":
                break;
            case "ENG":
                break;
            case "Log Out":
                // setIsModal(true)
                break;
            default:
                break;
        }
    };
    // const logout = () => {
    //     if (fcmToken) {
    //         setLoader(true)
    //         let body = {
    //             key: fcmToken
    //         }
    //         userLogout(body).then((val) => {
    //             store.dispatch(signOut())
    //             deleteData("accessToken")
    //             setIsModal(false)

    //         }).catch((error) => {
    //             console.log(error, 'error===')
    //             store.dispatch(signOut())
    //             deleteData("accessToken")
    //             setIsModal(false)
    //             setLoader(false)
    //         }).finally(() => setLoader(false))
    //     } else {
    //         store.dispatch(signOut())
    //         deleteData("accessToken")
    //         setIsModal(false)
    //     }
    // }

    // const deleteAccount = () => {
    //     setLoader(true)
    //     deleteUserAccount(user?.id).then((val) => {
    //         store.dispatch(signOut())
    //         deleteData("accessToken")
    //         refDeleteAccount.current.close()
    //     }).catch((error) => {
    //         console.log(error, 'error===')
    //         setLoader(false)
    //         refDeleteAccount.current.close()
    //     }).finally(() => setLoader(false))
    // }

    // const renderView = useCallback(() => {
    //     if (index === 11) {
    //         return (
    //             <Switch
    //                 trackColor={{ false: 'grey', true: themeColors.primary }}
    //                 thumbColor={themeColors.white}
    //                 onValueChange={toggleSwitch}
    //                 value={authState.isBottom}
    //             />
    //         )
    //     }
    //     else {
    //         if (index !== 12 && index !== 13) {
    //             return (
    //                 <SecondaryArrowLeft />
    //             )
    //         }
    //     }
    // }, [index])

    return (
        <>
            <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.6} >
                <View style={[styles.container]}>
                    <View style={styles.row}>
                        <View style={styles.svgView}>
                            {item.svg}
                        </View>
                        <CustomText color={index === 13 ? "#BA1A1A" : themeColors.black80} body >{item.label}</CustomText>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <LogoutPopup
                visible={isModal}
                onCancel={() => setIsModal(false)}
                toggleModal={() => setIsModal(!isModal)}
                loader={loader}
                onYes={logout}
            />
            <CustomModal refRBSheet={refDeleteAccount} height={SCREEN_HEIGHT * 0.28}>
                <View style={{ width: SCREEN_WIDTH }}>
                    <CustomText color={themeColors.black80} subtitle medium style={{ alignSelf: 'center' }}>Delete Account</CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <ItemSeparator />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomText color={themeColors.label} body style={{ textAlign: 'center', alignSelf: "center" }}>Are you sure you want to delete this account?</CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.04} />
                    <View style={styles.footer}>
                        <Button
                            label={"Delete"}
                            iconLeft={<DeleteAccountIcon strokeColor={themeColors.white} />}
                            buttonContainerStyle={styles.yesBtn}
                            onPress={deleteAccount}
                            loading={loader}
                        />
                        <Button
                            label={"No"}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={styles.noBtn}
                            onPress={() => refDeleteAccount.current.close()}
                        />
                    </View>
                </View>
            </CustomModal> */}
        </>
    )
}

export default MoreItemCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    },
    svgView: {
        backgroundColor: themeColors.white,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        gap:20
    },
    row2: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    deleteAccountCon: {
        width: SCREEN_WIDTH,
    },
    footer: {
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    noBtn: {
        width: SCREEN_WIDTH * 0.45,
        height: 48,
    },
    yesBtn: {
        width: SCREEN_WIDTH * 0.45,
        height: 48,
        backgroundColor: '#BA1A1A'
    }
})