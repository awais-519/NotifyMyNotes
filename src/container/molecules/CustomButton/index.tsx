import {View, Text, Alert, Button, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.scss';
import {style} from '@mui/system';

const CustomButton = ({onPress, text, type = 'primary', bgColor, fgColor}) => {
  const test = () => {
    Alert.alert('HEY');
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles[`${type}Container`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text style={[styles[`${type}Text`], fgColor ? {color: fgColor} : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
