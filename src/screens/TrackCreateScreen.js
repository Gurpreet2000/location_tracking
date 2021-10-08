import '../_mockLocation';
import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import {useIsFocused} from '@react-navigation/native';

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, addLocation);

  return (
    <>
      <Text h2>Create a Map</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
