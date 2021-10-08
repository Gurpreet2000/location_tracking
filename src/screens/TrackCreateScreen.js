import '../_mockLocation';
import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import {useLocation} from '../hooks/useLocation';

const TrackCreateScreen = ({navigation}) => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  console.log(navigation);

  useEffect(() => {});

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
