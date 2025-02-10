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
import { IMAGES } from "../../../assets/images";
import store from "../../../redux/store";
import { signIn } from "../../../redux/actions";
import FlashNotification from "../../../components/FlashNotify";
import { ENUMS } from "../../../utils/enums";
import { getStyles } from "./SignUpScreen.style";
import CustomTextInput2 from "../../../components/CustomTextInput2";

const SignUpScreen = (props) => {

    const { isLoading, startLoading, stopLoading } = useLoading();
    const [country, setCountry] = useState("United States");
    const [countryCode, setCountryCode] = useState("CA");
    const [selectCountry, setSelectCountry] = useState("United States");
    const [formattedValue, setFormattedValue] = useState("");
    const styles = getStyles();
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
    const [data, setData] = useState({
        fName: {
            value: "",
            errors: [],
        },
        lName: {
            value: "",
            errors: [],
        },
        phone_extension: {
            value: "1",
            errors: [],
        },
        phone: {
            value: "",
            errors: [],
        },
        email: {
            value: "",
            errors: [],
        },
        password: {
            value: "",
            errors: [],
        },
        confirmPassword: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
    data?.fName?.value?.length &&
    data?.lName?.value?.length &&
    data?.phone?.value?.length &&
    data?.email?.value?.length &&
    data?.email?.value.match(/.@.*\.../) &&
    data?.password?.value?.length &&
    data?.confirmPassword?.value?.length &&
    data?.confirmPassword?.value === data?.password?.value 

    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };

            if (tag === "fName") {
                valueToSet.value = t.trim();
                if (t.trim().length > 0) {
                    valueToSet.value = t;
                    valueToSet.errors = [];
                } else {
                    valueToSet.errors = ["First Name Required"];
                }
            }

            if (tag === "lName") {
                valueToSet.value = t.trim();
                if (t.trim().length > 0) {
                    valueToSet.value = t;
                    valueToSet.errors = [];
                } else {
                    valueToSet.errors = ["Last Name Required"];
                }
            }
            if (tag === "phone") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;
                } else {
                    valueToSet.success = [];
                    valueToSet.errors = ["Phone Number Required"];
                }
                if (t.length === 10) {
                    valueToSet.value = t;
                } else {
                    valueToSet.success = [];
                    valueToSet.errors = ["Phone Number should be 10 digits"];
                }
            }
            if (tag === "phone_extension") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;
                } else {
                    valueToSet.success = [];
                    valueToSet.errors = ["Phone Number Extension Required"];
                }
            }
            if (tag === "email") {
                valueToSet.value = t;
                if (t.match(/.@.*\.../)) {
                    valueToSet.value = t;
                } else if (t === "") {
                    valueToSet.errors = [];
                } else {
                    valueToSet.success = [];
                    valueToSet.errors = ["Enter Valid Email"];
                }
            }
            if (tag === "password") {
                valueToSet.value = t;

                if (t === "") {
                    valueToSet.errors = [];
                } else if (t.length < 8) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Password must be at least 8 characters long",
                    ];
                } else if (
                    t.length >= 8 &&
                    data?.confirmPassword?.value &&
                    data?.confirmPassword?.value?.length >= 8
                ) {
                    if (data?.confirmPassword?.value !== t) {
                        data.confirmPassword.errors = [
                            "Password does not match",
                        ];
                    } else {
                        data.confirmPassword.errors = [];
                    }
                } else {
                    valueToSet.errors = [];
                }
            } else if (tag === "confirmPassword") {
                valueToSet.value = t;

                if (t === "") {
                    valueToSet.errors = [];
                } else if (t.length < 8) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Password must be at least 8 characters long",
                    ];
                } else if (data.password.value !== t) {
                    valueToSet.success = [];
                    valueToSet.errors = ["Password does not match"];
                } else {
                    valueToSet.errors = [];
                }
            } else {
                valueToSet.value = t;
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    const handleSignUp = () => {

              
    };

    return (
        <>
            <LayoutContainer
                noHeight
                headerTitle={"Sign Up"}
                isHeader
                extraHeight={300}
                backOnPress={() => navigationRef.goBack()}
            >

                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <View style={styles.fieldContainer}>
                    <CustomText color={themeColors.black} h3 medium>
                        Let's get started
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.005} />
                    <CustomText color={themeColors.label} body>
                        Please add your information below
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <View style={styles.FLNamesContainer}>
                        <CustomTextInput2
                            label={"First Name*"}
                            value={data?.fName?.value}
                            placeholder={"Enter"}
                            inputStyle={styles.fL_InputCon}
                            onChangeText={(t) => handleInput(t, "fName")}
                            errors={data?.fName?.errors}
                            success={data?.fName?.success}
                        />
                        <CustomTextInput2
                            label={"Last Name*"}
                            value={data?.lName?.value}
                            placeholder={"Enter"}
                            inputStyle={styles.fL_InputCon}
                            onChangeText={(t) => handleInput(t, "lName")}
                            errors={data?.lName?.errors}
                            success={data?.lName?.success}
                        />
                    </View>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />

                    <CustomTextInput
                        label={"Email*"}
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
                    <>
                        <CustomText body medium color={themeColors.label}>
                            Phone Number*
                        </CustomText>
                        <Spacer height={SCREEN_HEIGHT * 0.01} />
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
                                    "phone"
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
                    <CustomTextInput
                        label={'Password*'}
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
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomTextInput
                        label={'Confirm Password*'}
                        value={data?.confirmPassword?.value}
                        placeholder={"Enter Password"}
                        onChangeText={(t) => handleInput(t, "confirmPassword")}
                        password={!confirmPasswordToggle}
                        rightIcon={
                            confirmPasswordToggle ? (
                                <PasswordUnlock />
                            ) : (
                                <PasswordLock />
                            )
                        }
                        rightIconPress={() =>
                            setConfirmPasswordToggle(!confirmPasswordToggle)
                        }
                        errors={data?.confirmPassword?.errors}
                        success={data?.confirmPassword?.success}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.04} />
                    <Button
                        loading={isLoading}
                        disabled={!isValidated}
                        label={"SIGN UP"}
                        buttonContainerStyle={styles.loginBtn}
                        onPress={handleSignUp}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                </View>
            </LayoutContainer>
        </>
    );
};

export default SignUpScreen;
