import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {CreatePropertyIcon} from '../assets/svgs';
import {IMAGES} from '../assets/images';

const SellCarFloatButton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <Image source={IMAGES.sellCarLogo} />
    </TouchableOpacity>
  );
};
export default SellCarFloatButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    bottom: Platform.OS === 'android' ? -2 : -8,
    right: 0,
  },
});
