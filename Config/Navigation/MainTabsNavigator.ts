import { createBottomTabNavigator } from "react-navigation";
import Home from "../../Screens/Home";

// this is our tabs view where you should put your main tab
export const MainTabs = createBottomTabNavigator(
    {
        /**
         *  this is where you put your screens that should be accessible through the tabs
         */
        Home: Home
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#a41034',
        },
    }
);