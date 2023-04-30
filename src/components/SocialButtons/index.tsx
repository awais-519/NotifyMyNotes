import CustomButton from '../CustomButton';
import React from 'react';

const onSignInWithGooglePress = () => {};
const onSignInWithFacebookPress = () => {};
const onSignInWithApplePress = () => {};

const SocialButtons = () => {
  return (
    <>
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
    </>
  );
};

export default SocialButtons;
