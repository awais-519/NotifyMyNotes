import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
// @ts-ignore
import styles from './styles.scss';
import CustomButton from '../../components/CustomButton';
import SocialButtons from '../../components/SocialButtons';

const ConfirmSignupScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPress = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.confirmYourAccountTitle}>Confirm Your Account</Text>
        <CustomInput
          placeholder={'Enter your code'}
          value={code}
          setValue={setCode}
          secureEntry={true}
        />
        <CustomButton text={'Confirm'} onPress={onConfirmPress} />
        <TouchableOpacity style={styles.resendCodeText}>
          <Text>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConfirmSignupScreen;
