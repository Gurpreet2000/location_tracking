import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import {useIsFocused} from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const {
    state: {recording},
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    location => addLocation(location, recording),
    [recording],
  );

  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <>
      <Text h2>Create a Map</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
