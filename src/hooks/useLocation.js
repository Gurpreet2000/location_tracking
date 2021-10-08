import {useState, useEffect} from 'react';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default callback => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      let {status} = await requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErr('Permission to access location was denied');
        return;
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
