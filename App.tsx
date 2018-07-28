import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './Config/Navigation/AppNavigator';
import { Provider } from 'react-redux';
import { Store, Persistor } from './Config/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component<{}, {}> {

  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }


}