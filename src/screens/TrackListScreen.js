import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({navigation: {navigate}}) => {
  return (
    <>
      <Text style={{fontSize: 48}}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
