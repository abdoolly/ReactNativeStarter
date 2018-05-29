import React from 'react';
import { curry } from 'ramda';
import Navigator from '../utils/Navigator';

export default class ReactComponent extends React.Component {

    /**
     * @description function currying the navigator to pass the (this) automatically without passing it explicitly in code
     * usage example : inside the button ex: onPress={this.goTo('Details')}
     */
    goTo = curry((yourthis, componentName) => {
        return () => Navigator.goTo(yourthis, componentName)
    })(this);

    /**
     * @description function currying the navigator to pass the (this) automatically without passing it explicitly in code
     * this accept optional paramters
     * usage example : inside the button ex: onPress={ this.goToWithParams('Details',{x:1}) }
     */
    goToWithParams = curry((yourthis, componentName, options) => {
        return () => Navigator.goTo(yourthis, componentName, options);
    })(this);

}