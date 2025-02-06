import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function ItemSeparator({style}) {
  return <View style={[styles.separator, {...style}]} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#E8E8E8',
    height: 1,
  },
});
