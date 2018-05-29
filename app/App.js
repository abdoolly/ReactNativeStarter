import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { StackNavigator } from 'react-navigation';
import routes from './config/routes';

const RootStack = StackNavigator(routes, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return (
      // main navigation component
      <RootStack />
    );
  }
}