import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.001;

const getLoaction = increment => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.084 + increment * tenMetersWithDegrees,
      latitude: 37.4219983 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLoaction(counter),
  });
  counter++;
}, 1000);
