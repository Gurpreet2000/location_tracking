import '../_mockLocation';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    let {status} = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErr('Permission to access location was denied');
      return;
    }

    try {
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          console.log(location);
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
