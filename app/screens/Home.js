import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import ReactComponent from '../lib/ReactComponent';
import { Button as Btn, Icon } from 'react-native-elements';
import Constants from '../utils/Constants';
import MBtn from '../components/materialButton/MBtn';
import { connect } from 'react-redux';
import { fetchPeopleFromAPI } from '../actions/action';

class Home extends ReactComponent {

    static navigationOptions = { header: null };

    render() {
        console.log('props', this.props);
        const { people, isFetching } = this.props.people;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Redux App Test</Text>
                <TouchableHighlight disabled={isFetching} onPress={this.props.getPeople} style={styles.button}>
                    <Text style={styles.btnText}>Fetch People's data</Text>
                </TouchableHighlight>

                <MBtn text="Hello World Material" onClick={this.goToWithParams('Login', { people: this.props.people })} />

                <TouchableHighlight>
                    <View>
                        {this.getPeople()}
                    </View>
                </TouchableHighlight>


            </View>
        );
    }

    getPeople() {
        const { people, isFetching } = this.props.people;

        if (isFetching)
            return (<Text>Loading...</Text>);

        return people.length ? (
            people.map((person, index) => {
                return (
                    <View key={index}>
                        <Text>Name  :  {person.name}</Text>
                        <Text>height:  {person.height}</Text>
                        <Text>mass  :  {person.mass}</Text>
                    </View>
                );
            })
        ) : (<Text>Empty</Text>)
    }



    // render() {
    //     return (
    // <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Text>Changes you make will automatically reload.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>

    //     <Btn
    //         title="LOADING BUTTON"
    //         loading
    //         loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
    //         titleStyle={{ fontWeight: "700" }}
    //         buttonStyle={{
    //             backgroundColor: "rgba(92, 99,216, 1)",
    //             width: 300,
    //             height: 45,
    //             borderColor: "transparent",
    //             borderWidth: 0,
    //             borderRadius: 5,
    //             shadowColor: 'black',
    //             shadowOpacity: 1

    //         }}
    //         containerStyle={{ marginTop: 20 }}
    //     />

    //     <Btn title='Click Me' onPress={this.goTo(Constants.Home)} />
    //     <TouchableHighlight title='Click Me 2' onPress={() => console.log('Hello bola')}>
    //         <Text>Press me</Text>
    //     </TouchableHighlight>

    //     <TouchableWithoutFeedback
    //         onPress={() => console.log('Hello bola')}

    //     >
    //         <View style={styles.btnStyle}>
    //             <Text>Press me 2</Text>
    //         </View>
    //     </TouchableWithoutFeedback>


    //     <MBtn onClick={() => console.log('Hello bola')} text='koko mkaka' />

    // </View>
    //     );
    // }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     btnStyle: {
//         backgroundColor: 'blue'
//     }
// });

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'blue',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnText: {
        color: 'white'
    }
});


const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeople: () => {
            console.log('i am in getPeople');
            return dispatch(fetchPeopleFromAPI())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



//https://react-native-training.github.io/react-native-elements/docs/button.html
//https://reactnavigation.org/docs/headers.html
//http://www.reactnativeexpress.com/redux
//https://medium.com/@ste.grider/component-kits-for-react-native-84eff4b321b9

// organize
//https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0
// https://medium.com/@chenzhe142/manage-react-native-project-folder-structure-and-simplify-the-code-c98da77ef792

//https://legacy.gitbook.com/