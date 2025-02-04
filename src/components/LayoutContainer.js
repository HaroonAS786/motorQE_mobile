import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Platform,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import { ArrowLeft } from '../assets/svgs';
import { themeColors } from '../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography';
import CustomText from './CustomText';
import MyStatusBar from './MyStatusBar';
import Spacer from './Spacer';
import RippleEffect from './RippleEffect';


const LayoutContainer = ({
    leftIcon,
    rightIcon,
    rightIconPress = () => null,
    rightIconDisabled,
    headerTitle,
    isHeader,
    isHeader2,
    isHeader3,
    children,
    style,
    refreshing,
    onRefresh,
    pullToRefresh,
    scrollEnable = true,
    isForm,
    noHeight,
    backOnPress = () => null,
    referralStyles,
    isBackOn,
    isBackPress,
    extraHeight
}) => {

    const delayedTap = useCallback(
        debounce(() => backOnPress(), 200),
        [],
    );
    const delayedTap2 = useCallback(
        debounce(() => isBackPress(), 200),
        [],
    );

    if (isHeader) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
                <View style={[styles.mainContWrap, style]}>
                    <SafeAreaView>
                        <View style={[styles.topCont]}>
                            <View style={styles.barCont}>
                                <RippleEffect
                                    rippleColor={themeColors.white}
                                    rippelContainerBorderRadius={20}
                                    onPress={delayedTap}
                                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                    style={styles.backIconCont}>
                                    {leftIcon ? leftIcon : <ArrowLeft />}
                                </RippleEffect>
                                <View />
                            </View>
                        </View>
                        <CustomText h6 color={themeColors.white} style={{ position: 'absolute', alignSelf: 'center', bottom: Platform.OS === "android" ? 8 : 12 }}>{headerTitle}</CustomText>
                    </SafeAreaView >
                    {
                        isForm ? (
                            <KeyboardAwareScrollView
                                style={[styles.scrollWrap, style]}
                                scrollEnabled={scrollEnable}
                                contentContainerStyle={[styles.headerWrap, style]}
                                showsVerticalScrollIndicator={false} >
                                {children}
                            </KeyboardAwareScrollView >
                        ) : noHeight ? (
                            <KeyboardAwareScrollView
                                scrollEnabled={scrollEnable}
                                keyboardShouldPersistTaps="handled"
                                extraHeight={extraHeight ? extraHeight : 200}
                                style={[styles.scrollWrap, style]}
                                contentContainerStyle={[styles.wrapNoHeight, style]}
                                showsVerticalScrollIndicator={false}
                                refreshControl={
                                    pullToRefresh ? (
                                        <RefreshControl
                                            refreshing={refreshing}
                                            onRefresh={onRefresh}
                                        />
                                    ) : null
                                }>
                                {children}
                            </KeyboardAwareScrollView>
                        ) : headerTitle ? (
                            <View style={[styles.headerWrap, style, referralStyles]}>
                                <View style={[styles.rowWrap]}>
                                    <View style={styles.barCont}>
                                        <RippleEffect
                                            rippleColor={themeColors.white}
                                            rippelContainerBorderRadius={20}
                                            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                            onPress={delayedTap}
                                            style={styles.backIconCont}>
                                            {leftIcon ? leftIcon : <ArrowLeft />}
                                        </RippleEffect>
                                        <View />
                                    </View>
                                    <CustomText bold size={16} color={themeColors.white} style={{ position: 'absolute', alignSelf: 'center', bottom: Platform.OS === "android" ? 8 : 12 }}>{headerTitle}</CustomText>
                                </View>
                                {children}
                            </View>
                        ) : null}
                </View >
            </>
        );
    }
    else if (isHeader2) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
                <SafeAreaView style={[styles.mainContWrap, style]}>
                    <View style={[styles.mainContWrap, style]}>
                        <SafeAreaView>
                            <View style={[styles.topCont]}>
                                <View style={styles.barCont}>
                                    {leftIcon ?
                                        <RippleEffect
                                            rippleColor={themeColors.white}
                                            rippelContainerBorderRadius={20}
                                            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                            onPress={isBackOn ? delayedTap2 : delayedTap}
                                            style={styles.backIconCont}>
                                            {leftIcon}
                                        </RippleEffect> : <Spacer width={SCREEN_WIDTH * 0.05} />}
                                    <CustomText style={styles.header2View} h6 color={themeColors.white}>{headerTitle}</CustomText>
                                    {rightIcon ?
                                        <TouchableOpacity
                                            activeOpacity={0.6}
                                            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                            onPress={rightIconPress}
                                            disabled={rightIconDisabled}
                                            style={styles.backIconCont}>
                                            {rightIcon}
                                        </TouchableOpacity>
                                        : <Spacer width={SCREEN_WIDTH * 0.05} />
                                    }
                                </View>
                            </View>
                        </SafeAreaView>
                        {isForm ? (
                            <View style={{ flex: 1 }}>
                                <KeyboardAwareScrollView
                                    style={[styles.wrap, style]}
                                    scrollEnabled={scrollEnable}
                                    contentContainerStyle={[styles.wrapNoHeight, style]}
                                    showsVerticalScrollIndicator={false}
                                >
                                    {children}
                                </KeyboardAwareScrollView>
                            </View>
                        ) : noHeight ? (
                            <View style={{ flex: 1 }}>
                                <KeyboardAwareScrollView
                                    enableAutomaticScroll={Platform.OS === 'ios'}
                                    extraHeight={200}
                                    keyboardShouldPersistTaps="handled"
                                    scrollEnabled={scrollEnable}
                                    style={[styles.scrollWrap, style]}
                                    contentContainerStyle={[styles.wrapNoHeight, style]}
                                    showsVerticalScrollIndicator={false}>
                                    {children}
                                </KeyboardAwareScrollView>
                            </View>
                        ) : (
                            <View style={[styles.headerWrap, style]}>{children}</View>
                        )}
                    </View>
                </SafeAreaView>
            </>
        );
    }
    else if (isHeader3) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
                <SafeAreaView style={[styles.mainContWrap, style]}>
                    <View style={[styles.mainContWrap, style]}>
                        <SafeAreaView>
                            <View style={[styles.topCont]}>
                                <View style={styles.barCont}>
                                    {leftIcon ?
                                        <RippleEffect
                                            rippleColor={themeColors.white}
                                            rippelContainerBorderRadius={20}
                                            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                            onPress={isBackOn ? delayedTap2 : delayedTap}
                                            style={styles.backIconCont}>
                                            {leftIcon}
                                        </RippleEffect> : <Spacer width={SCREEN_WIDTH * 0.05} />}
                                    <CustomText style={styles.header2View} h6 color={themeColors.white}>{headerTitle}</CustomText>
                                    {rightIcon ?
                                        <TouchableOpacity
                                            activeOpacity={0.6}
                                            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                            onPress={rightIconPress}
                                            disabled={rightIconDisabled}
                                            style={styles.backIconCont}>
                                            {rightIcon}
                                        </TouchableOpacity>
                                        : <Spacer width={SCREEN_WIDTH * 0.05} />
                                    }
                                </View>
                            </View>
                        </SafeAreaView>
                        <View style={[styles.headerWrap, style]}>{children}</View>

                    </View>
                </SafeAreaView>
            </>
        );
    }
    else {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle={"light-content"} />
                {isForm ? (
                    <KeyboardAwareScrollView
                        style={[styles.wrap, style]}
                        contentContainerStyle={[styles.wrapNoHeight, style]}
                        showsVerticalScrollIndicator={false}>
                        {children}
                    </KeyboardAwareScrollView>
                ) : noHeight ? (
                    <View style={{ flex: 1, backgroundColor: themeColors.white }}>
                        <KeyboardAwareScrollView
                            scrollEnabled={scrollEnable}
                            style={[styles.scrollWrap, style]}
                            extraHeight={extraHeight ? extraHeight : 200}
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={[styles.wrapNoHeight, style]}
                            refreshControl={
                                pullToRefresh ? (
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                ) : null
                            }
                            showsVerticalScrollIndicator={false}>
                            {children}
                        </KeyboardAwareScrollView>
                    </View>
                ) : (
                    <View
                        style={[
                            styles.wrap,
                            style,
                            { alignItems: 'center', justifyContent: 'flex-start' },
                        ]}>
                        {children}
                    </View>
                )}
            </>
        );
    }
}

export default LayoutContainer

const styles = StyleSheet.create({
    mainContWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrap: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: themeColors.white,
    },
    headerWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrapNoHeight: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topCont: {
        height: Platform.OS === "android" ? SCREEN_HEIGHT * 0.08 : SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: themeColors.primary,
        paddingBottom: Platform.OS === "android" && SCREEN_HEIGHT * 0.01
    },
    barCont: {
        height: SCREEN_HEIGHT * 0.035,
        width: SCREEN_WIDTH * 0.87,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.01 : 0,
    },
    backIconCont: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    rowTxt: {
        color: themeColors.primary,
        marginLeft: 5,
    },
    headingTitle: {
        marginTop: SCREEN_HEIGHT * 0.01,
    },
    rowWrap: {
        width: SCREEN_WIDTH * 0.85,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: SCREEN_HEIGHT * 0.01,
    },
    topPadding: {
        paddingTop: SCREEN_HEIGHT * 0.02,
    },
    header2View: {
        marginLeft: 16
        // alignSelf: 'center',
        // width: '60%'
    }
});