import React from 'react';
import { Platform, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import ReactComponent from "../../lib/ReactComponent";
import styles from './MBtn.style';



export default class MBtn extends ReactComponent {

    getAndroidJSX() {
        console.log('child this.props', this.state);
        return (
            <TouchableNativeFeedback
                onPress={this.props.onClick}
            >
                <View style={styles.btn}>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }

    getIOSJSX() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onClick}
            >
                <View style={[styles.btn, this.props.viewStyle]}>
                    <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    getComponentBody() {
        return Platform.select({
            android: this.getAndroidJSX(),
            ios: this.getIOSJSX(),
            default: this.getAndroidJSX()
        });
    }

    render() {
        return this.getComponentBody();
    }
}