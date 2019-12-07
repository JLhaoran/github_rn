import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomePage from  '../page/HomePage';
import WelcomePage from  '../page/WelcomePage';
import DetailPage from  '../page/DetailPage';

 const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    }},{
     defaultNavigationOptions: {
         header: null  //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
     }
     }
 );

 const MainNavigator = createStackNavigator({
     HomePage: {
        screen: HomePage,
    },
     DetailPage: {
         screen: DetailPage,
     }},
    {
    defaultNavigationOptions: {
        header: null  //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});

export default SwitchNavigator = createSwitchNavigator(
    {
        Init: InitNavigator,
        Main: MainNavigator,
    },
    {
        defaultNavigationOptions: {
            header: null  //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
);


