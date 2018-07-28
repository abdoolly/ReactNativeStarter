import { createSwitchNavigator } from 'react-navigation';
import { MainTabs } from './MainTabsNavigator';

// this is where we usually put our auth screens
export const AppNavigator = createSwitchNavigator({
    /**
     * the auth pages here
     */
    MainTabs // this is the main tab navigator should go to after the auth success
}, { initialRouteName: 'MainTabs' });

