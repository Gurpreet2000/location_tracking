import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({
  navigation: {navigate, addListener, removeListener},
}) => {
  const {state, fetchTracks} = useContext(TrackContext);

  useEffect(() => {
    const listener = addListener('focus', fetchTracks);

    return () => {
      removeListener(listener);
    };
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigate('TrackDetail', {_id: item._id});
            }}>
            <ListItem>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
