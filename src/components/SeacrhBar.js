import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

import {FilterIcon, SearchIcon} from '../assets/svgs';
import {themeColors} from '../config/colors';
import {SCREEN_WIDTH} from '../config/typography';

const SearchBar = ({
  style,
  value,
  placeholder,
  onChangeText,
  handleSearch,
  editable,
  autoComplete,
}) => {
  return (
    <View style={[styles.mainWrap, style]}>
      <SearchIcon />
      <TextInput
        value={value}
        autoComplete={autoComplete}
        editable={editable}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={themeColors.black}
        style={styles.container}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.filterSvg}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFBFB',
    borderRadius: 8,
    borderColor: themeColors.label,
    borderWidth: 1,
    height: 46,
    paddingHorizontal: 12,
    width: SCREEN_WIDTH / 1.1,
    marginTop: 16,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    color: themeColors.black,
    backgroundColor: '#FFFBFB',
    width: '80%',
    borderRadius: 8,
  },

  filterSvg: {
    marginRight: 16,
  },
});
