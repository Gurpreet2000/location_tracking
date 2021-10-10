import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SplashScreen from './src/screens/SplashScreen';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const trackListFlow = () => (
  <Stack.Navigator screenOptions={{}} initialRouteName="TrackList">
    <Stack.Screen
      name="TrackList"
      component={TrackListScreen}
      options={{
        title: 'Tracks',
        headerStyle: {backgroundColor: '#e91e63'},
        headerTintColor: '#eee',
        headerTitleStyle: {fontWeight: 'bold'},
      }}
    />
    <Stack.Screen
      name="TrackDetail"
      component={TrackDetailScreen}
      options={{title: ''}}
    />
  </Stack.Navigator>
);

const App = () => {
  const {state} = useContext(AuthContext);
  const isSignedIn = state.token ? true : false;

  if (state.isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator activeColor="#e91e63">
          <Tab.Screen
            name="Tracks"
            component={trackListFlow}
            options={{
              title: 'Add Track',
              tabBarIcon: ({color}) => (
                <Icon name="th-list" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="TrackCreate"
            component={TrackCreateScreen}
            options={{
              title: 'Tracks',
              tabBarIcon: ({color}) => (
                <Icon name="plus" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="TrackAccount"
            component={AccountScreen}
            options={{
              title: 'Account',
              tabBarIcon: ({color}) => (
                <Icon name="gear" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Signin">
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => (
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
);
