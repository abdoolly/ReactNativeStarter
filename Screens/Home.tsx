import React from 'react';
import { Text, View } from 'react-native';
import { homeStyle } from '../Styles/Home.style';

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <View style={homeStyle.container}>
                <Text>This is a starter application for React Native</Text>
            </View>
        );
    }
}