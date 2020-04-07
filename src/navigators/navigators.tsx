import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Login from '../pages/Login';
import User from '../pages/User';
import Actor from '../pages/Actor';
import Search from '../pages/Search';

import BackButton from '../components/BackButton';

const Auth = createStackNavigator();
const App = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Auth.Navigator>
  );
};

const AppStack: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <App.Screen
      name="Movie"
      component={Movie}
      options={{
        // headerShown: false,
        headerTransparent: true,
        title: '',
        headerTintColor: 'white',
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        header: ({ navigation }) => {
          return (
            <BackButton isMovie onPress={navigation.goBack}/>
          )
        }
      }}
    />
    <App.Screen
      name="User"
      component={User}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: 'white',
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
      }}
    />
    <App.Screen
      name="Actor"
      component={Actor}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: 'white',
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        header: ({ navigation }) => {
          return (
            <BackButton onPress={navigation.goBack}/>
          )
        }
      }}
    />
    <App.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    />
  </App.Navigator>
);

export {AppStack, AuthStack};
