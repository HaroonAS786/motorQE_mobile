import React, { useState } from "react";

import CheckBox from "@react-native-community/checkbox";
import {
    Image,
    Keyboard,
    TouchableOpacity,
    View
} from "react-native";

import PhoneInput from "react-native-international-phone-number";
import { PasswordLock, PasswordUnlock, WhatsappCheckIcon, WhatsappIcon } from "../../../assets/svgs";
import Button from "../../../components/Button";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import LayoutContainer from "../../../components/LayoutContainer";
import Spacer from "../../../components/Spacer";
import { themeColors } from "../../../config/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../config/typography";

import useLoading from "../../../hooks/useLoading";
import { navigationRef } from "../../../navigations/RootNaviagtion";
import { getStyles } from "./LoginScreen.style";
import { IMAGES } from "../../../assets/images";
import store from "../../../redux/store";
import { signIn } from "../../../redux/actions";
import FlashNotification from "../../../components/FlashNotify";
import { ENUMS } from "../../../utils/enums";

const LoginScreen = (props) => {

    const { isLoading, startLoading, stopLoading } = useLoading();
    const [country, setCountry] = useState("United States");
    const [countryCode, setCountryCode] = useState("CA");
    const [selectCountry, setSelectCountry] = useState("United States");
    const [formattedValue, setFormattedValue] = useState("");
    // const { userSignIn } = useLoginScreen();
    const styles = getStyles();
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [data, setData] = useState({
        email: {
            value: "taimoor@gmail.com",
            errors: [],
        },
        password: {
            value: "Aa112233",
            errors: [],
        },
        phoneNumber: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.email?.value?.length && data?.password?.value?.length;

    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };
            if (tag === "email") {
                valueToSet.value = t;
                if (t.trim().length > 0) {
                    if (t.match(/.@.*\.../)) {
                        valueToSet.value = t;
                    } else {
                        valueToSet.success = [];
                        valueToSet.errors = ["Enter Valid Email"];
                    }
                } else {
                    valueToSet.errors = [];
                }
            }
            if (tag === "password") {
                valueToSet.value = t;
            }
            if (tag === "phoneNumber") {
                valueToSet.value = t;
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    const handleLogin = () => {
        if (!isValidated) {
            setData({
                email: { errors: [" Email Required"] },
                password: { errors: [" Password Required"] },
            });
        } else {
            Keyboard.dismiss();
            startLoading();
            setTimeout(() => {
                store.dispatch(
                    signIn({
                        token: 'xyz',
                        user: {},
                    })
                );
                FlashNotification.show("Login Successfully", ENUMS.SUCCESS);
            }, 3000)

            // const body = {
            //     username: data?.email?.value,
            //     password: data?.password?.value,
            //     key: fcmToken,
            //     date_time: format(new Date(), "yyyy-MM-dd 'T' HH:mm:ss"),
            // };

            // userSignIn(finalPayload)
            //     .then((val) => {
            //         if (val.status === ENUMS.SUCCESS) {

            //         }
            //         if (val.status === ENUMS.ERROR) {
            //             FlashNotification.show(val.status, ENUMS.ERROR);
            //             stopLoading();
            //         }
            //     })
            //     .catch((error) => {
            //         if (error === ENUMS.NETWORK_ERROR) {
            //             stopLoading();
            //         } else {
            //             stopLoading();
            //             FlashNotification.show(error, ENUMS.ERROR);
            //             console.log("error", JSON.stringify(error, null, 2));
            //         }
            //     });
        }
    };

    const OffToSignUp = () => {
        navigationRef.navigate("SignUpScreen");
    };

    return (
        <>
            <LayoutContainer noHeight extraHeight={220}>
                <Spacer height={SCREEN_HEIGHT * 0.1} />
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Image
                        source={IMAGES.headerLogo}
                    />
                </View>
                {/* <Spacer height={SCREEN_HEIGHT * 0.03} /> */}
                {/* <CustomText color={themeColors.label} h6>Login with Whatsapp</CustomText> */}
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.fieldContainer}>

                    {/* <>
                        <PhoneInput
                            value={formattedValue}
                            defaultCountry={countryCode}
                            showOnly={["US", "CA"]}
                            modalStyles={{
                                modal: { height: SCREEN_HEIGHT * 0.25 },
                            }}
                            placeholder={"e.g 999 999 9999"}
                            onChangePhoneNumber={(val) => {
                                handleInput(
                                    val.replace(/\s/g, ""),
                                    "phoneNumber"
                                );
                                setFormattedValue(val);
                            }}
                            phoneInputStyles={{
                                container: {
                                    backgroundColor: "#F3F3F3",
                                    borderWidth: 0
                                },
                                flagContainer: {
                                    borderTopLeftRadius: 7,
                                    borderBottomLeftRadius: 7,
                                    justifyContent: "center",
                                    backgroundColor: "#F3F3F4",
                                },
                                flag: {},
                                caret: {
                                    color: themeColors.black80,
                                    fontSize: 16,
                                },
                                divider: {
                                    backgroundColor: themeColors.black100,
                                },
                                callingCode: { fontSize: 16 },
                                input: { color: "#000" },
                            }}
                            selectedCountry={country}
                            onChangeSelectedCountry={(val) => {
                                setCountry(val);
                                setSelectCountry(val.name.en);
                            }}
                        />
                    </>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <View style={styles.headerView}>
                        <WhatsappIcon />
                        <CustomText body2 color={themeColors.label} style={{ width: '70%' }}>
                            Get Instant Updates
                            From Moterqe on Your Whatsapp
                        </CustomText>
                        <WhatsappCheckIcon />
                    </View>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <Button
                        // loading={isLoading}
                        disabled={!data?.phoneNumber?.value}
                        label={"GET OTP"}
                        buttonContainerStyle={styles.loginBtn}
                        // onPress={handleLogin}
                    /> */}
                    {/* <Spacer height={SCREEN_HEIGHT * 0.03} /> */}
                    {/* <CustomText color={themeColors.label} style={{ textAlign: 'center' }} body>------  Or login with  ------</CustomText> */}
                    <Spacer height={SCREEN_HEIGHT * 0.03} />
                    <CustomTextInput
                        label={"Email"}
                        value={data?.email?.value}
                        spellCheck={false}
                        autoCapitalize={"none"}
                        placeholder={"name@email.com"}
                        keyboardType={"email-address"}
                        onChangeText={(t) => handleInput(t, "email")}
                        errors={data?.email?.errors}
                        success={data?.email?.success}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomTextInput
                        label={'Password'}
                        value={data?.password?.value}
                        placeholder={"Enter Password"}
                        onChangeText={(t) => handleInput(t, "password")}
                        password={!passwordToggle}
                        rightIcon={
                            passwordToggle ? (
                                <PasswordUnlock />
                            ) : (
                                <PasswordLock />
                            )
                        }
                        rightIconPress={() =>
                            setPasswordToggle(!passwordToggle)
                        }
                        errors={data?.password?.errors}
                        success={data?.password?.success}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.04} />
                    <Button
                        loading={isLoading}
                        label={"LOGIN"}
                        buttonContainerStyle={styles.loginBtn}
                        onPress={handleLogin}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <Button
                        buttonTextColor={themeColors.label}
                        leftIcon={IMAGES.googleLogo}
                        label={"Continue with Google"}
                        buttonContainerStyle={styles.googleSignIn}
                    // onPress={handleGoogle}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <View style={styles.footerView}>
                        <CustomText body color={themeColors.label}>
                            Don’t have an account yet?{" "}
                        </CustomText>
                        <TouchableOpacity onPress={OffToSignUp} activeOpacity={0.6}>
                            <CustomText body color={themeColors.secondary}>
                                Sign up
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </LayoutContainer>
            {/* <View style={styles.needHelpLabelCon}>
                <View
                    style={{ alignSelf: "center", padding: 8, width: '80%' }}
                >
                    <CustomText
                        color={themeColors.label}
                        style={styles.needHelpLabel}
                        body2
                    >
                        By continuing, you agree to the moterqe
                        Privacy Policy and Terms & Conditions.
                    </CustomText>
                </View>
            </View> */}
        </>
    );
};

export default LoginScreen;
