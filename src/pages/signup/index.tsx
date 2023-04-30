import {View, Text, Image, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
// @ts-ignore
import styles from './styles.scss';
import CustomButton from '../../components/CustomButton';
import SocialButtons from '../../components/SocialButtons';

const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSignUpPress = () => {};
  const onRegisterPress = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.signupTitle}>Create Your Account</Text>
        <CustomInput
          placeholder={'Username'}
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder={'Email'}
          value={password}
          setValue={setPassword}
        />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureEntry={true}
        />
        <CustomInput
          placeholder={'Repeat Password'}
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureEntry={true}
        />
        <CustomButton
          text={'Register Up'}
          onPress={onRegisterPress}
          type={'primary'}
        />
        <Text style={styles.policyText}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.policySubText}>Terms of Use</Text> and{' '}
          <Text style={styles.policySubText}>Privacy Policy</Text>
        </Text>
        <SocialButtons />
        <CustomButton
          text={'Have an account? Sign in'}
          onPress={onSignUpPress}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
