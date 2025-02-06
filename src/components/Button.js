import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import {themeColors} from '../config/colors';
import CustomText from './CustomText';
import Spacer from './Spacer';
import {SCREEN_WIDTH} from '../config/typography';

const Button = ({
  label,
  onPress,
  disabled,
  textOnly = false,
  caption = false,
  buttonContainerStyle = {},
  rightIcon,
  buttonTextColor = undefined,
  body2 = false,
  leftIcon,
  btnTextStyle,
  buttonDisabledBG,
  buttonDisabledTextColor,
  loading,
}) => {
  const renderRightIcon = () => {
    if (!rightIcon) return null;
    if (typeof rightIcon === 'string') {
      // Assuming rightIcon is a URI for an image
      return <Image source={{uri: rightIcon}} style={styles.iconStyle} />;
    } else if (React.isValidElement(rightIcon)) {
      // Assuming rightIcon is an SVG component or React element
      return rightIcon;
    } else if (rightIcon) {
      // Check if rightIcon is an Image object
      return <Image source={rightIcon} style={styles.iconStyle} />;
    }
    return null; // Fallback in case the type is unexpected
  };

  const renderIcon = () => {
    if (!leftIcon) return null;
    if (typeof leftIcon === 'string') {
      // Assuming icon is a URI for an image
      return <Image source={{uri: leftIcon}} style={styles.iconStyle} />;
    } else if (React.isValidElement(leftIcon)) {
      // Assuming icon is an SVG component or React element
      return leftIcon;
    } else if (leftIcon) {
      // Check if icon is an Image object
      return <Image source={leftIcon} style={styles.iconStyle} />;
    }
    return null; // Fallback in case the type is unexpected
  };

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[
        styles.container,
        textOnly && {backgroundColor: undefined},
        buttonContainerStyle,
        disabled && {
          backgroundColor: buttonDisabledBG || themeColors.buttonDisabled,
        },
      ]}
      activeOpacity={0.8}>
      <>
        {loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <>
            {renderIcon()}
            <Spacer width={SCREEN_WIDTH * 0.02} />
            {label && (
              <CustomText
                button
                semiBold
                bold={Platform.OS === 'android' && true}
                style={btnTextStyle}
                caption={caption}
                body2={body2}
                color={
                  disabled
                    ? buttonDisabledTextColor || themeColors.buttonDisabledText
                    : buttonTextColor
                }>
                {label}
              </CustomText>
            )}
            {renderRightIcon()}
            <Spacer width={SCREEN_WIDTH * 0.02} />
          </>
        )}
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.buttonPrimary,
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Button;
