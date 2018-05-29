import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import ReactComponent from '../lib/ReactComponent';
import { Button as Btn, Icon } from 'react-native-elements';


export default class Login extends ReactComponent {
    render() {
        console.log('props', this.props.navigation.state);
        return (
            <View style={styles.container}>

                <Btn
                    title="LOADING BUTTON"
                    loading
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                        shadowColor: 'black',
                        shadowOpacity: 1
                    }}
                    containerStyle={{ marginTop: 20 }}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStyle: {
        backgroundColor: 'blue'
    }
});