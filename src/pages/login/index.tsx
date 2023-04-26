import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../container/molecules/CustomInput';
// @ts-ignore
import NotifyMyShitLogo from '../../../assets/images/NotifyMyShitLogo.png';
import styles from './styles.scss';
import CustomButton from '../../container/molecules/CustomButton';
import {AlertTitle} from '@mui/material';

const LoginScreen = () => {
  //useWindowsDimenstion hook is used to get the height of the current screen our app is working on.
  const {height} = useWindowDimensions();

  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const onSigninPress = () => {
    Alert.alert('SIGN IN PRESSED');
  };
  const onForgotPassPress = () => {
    Alert.alert('FORGOT?');
  };

  const onSignInWithGooglePress = () => {};
  const onSignInWithFacebookPress = () => {};
  const onSignInWithApplePress = () => {};
  const onSignUpPress = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={NotifyMyShitLogo}
          style={[styles.mainLogo, {height: height * 0.5}]}
          resizeMode={'contain'}
        />
        <CustomInput
          placeholder={'Username'}
          value={userName}
          setValue={setUserName}
          secureEntry={false} // By default this field is false. But the shitty error red line wasn't going off. So did that.
        />
        <CustomInput
          placeholder={'Password'}
          value={pass}
          setValue={setPass}
          secureEntry={true}
        />
        <CustomButton
          text={'Sign in'}
          onPress={onSigninPress}
          type={'primary'}
        />
        <CustomButton
          text={'Forgot Password'}
          onPress={onForgotPassPress}
          type={'tertiary'}
        />
        <CustomButton
          text={'Sign in with Google'}
          onPress={onSignInWithGooglePress}
          bgColor={'#fae9ea'}
          fgColor={'#DD4D44'}
        />
        <CustomButton
          text={'Sign in with Facebook'}
          onPress={onSignInWithFacebookPress}
          bgColor={'#E7EAF4'}
          fgColor={'#4765A9'}
        />
        <CustomButton
          text={'Sign in with Apple'}
          onPress={onSignInWithApplePress}
          bgColor={'#E3E3E3'}
          fgColor={'#363636'}
        />
        <CustomButton
          text={`Don't have any account? Create one`}
          type={'tertiary'}
          onPress={onSignUpPress}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
