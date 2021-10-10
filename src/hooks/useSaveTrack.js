import React, {useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as TrackContext} from '../context/TrackContext';
import {useNavigation} from '@react-navigation/core';

export default () => {
  const {createTrack} = useContext(TrackContext);
  const {
    state: {locations, name},
    reset,
  } = useContext(LocationContext);
  const {navigate} = useNavigation();

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
