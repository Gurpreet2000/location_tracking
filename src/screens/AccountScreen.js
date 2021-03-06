import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 48}}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountScreen;
