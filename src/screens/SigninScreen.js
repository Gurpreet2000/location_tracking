import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);

    return () => {
      navigation.removeListener(listener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text={"Don't have an account?\nSign up instead"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
