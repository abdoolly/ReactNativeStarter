export default class Navigator {

    /**
     * @description get props and component name and navigate you to it
     * @param {*} this
     * @param {*} componentName 
     */
    static goTo(yourThis, componentName, options) {
        console.log('yourThis.props', yourThis);
        return yourThis.props.navigation.navigate(componentName, options);
    }

    /**
     * @description function to navigate back from the current component
     * @param {*} yourThis 
     * @param {*} componentName 
     */
    static goBack(yourThis, componentName) {
        return yourThis.props.navigation.goBack();
    }

    /**
     * @description function which will get the params passed through the navigator if exist else
     * it will return null
     * @param {*} yourThis 
     */
    static getParams(yourThis) {
        return yourThis.props.navigation.state.params;
    }
}