import React from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';

import LoginScreen from './src/pages/login';
import SignupScreen from './src/pages/signup';
import ConfirmSignupScreen from './src/pages/ConfirmSignup';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen />
      {/* <SignupScreen /> */}
      {/* <ConfirmSignupScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'F9FBFC',
  },
});

export default App;
