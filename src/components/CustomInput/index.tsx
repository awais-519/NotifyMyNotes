import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './style.scss';
import {mv5} from '../../constants/styles';
// import {TextInput} from 'react-native-paper';

// try to make it generic. MAKE IT GENERIC, ALWAYS.
function CustomInput({placeholder, value, setValue, secureEntry = false}) {
  return (
    <View style={[styles.inputContainer, mv5]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={txt => setValue(txt)}
        secureTextEntry={secureEntry}></TextInput>
    </View>
  );
}

export default CustomInput;
