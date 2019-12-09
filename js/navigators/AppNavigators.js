import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
         navigationOptions:{
             header: null
         }
    },
     DetailPage: {
         screen: DetailPage,
         navigationOptions:{
             // header: null //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
         }
     }});

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


