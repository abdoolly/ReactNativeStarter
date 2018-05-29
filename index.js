import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/App';
import configureStore from './app/config/store';


const store = configureStore();

const myApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent('myApp', () => myApp);
