import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from  '../page/HomePage';
import WelcomePage from  '../page/WelcomePage';
import DetailPage from  '../page/DetailPage';

import {connect} from 'react-redux';
// import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
//react-navigation-redux-helpers3.0 变更
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';



export const rootCom = 'Init';//设置根路由

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

export const SwitchNavigator = createSwitchNavigator(
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

export const RootNavigator = createAppContainer(SwitchNavigator);
//引入redux
/**
* 1.初始化react-navigation与redux的中间件，
* 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者)
* 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
* 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
* @type {Middleware}
*/
    //react-navigation-redux-helpers3.0 变更
// export const middleware = createReactNavigationReduxMiddleware(
//     'root',
//     state => state.nav
// );

export const middleware = createReactNavigationReduxMiddleware(

    state => state.nav,

    'root'

);


/**
 * 2.将根导航器组件传递给 reduxifyNavigator 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
// const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
    //react-navigation-redux-helpers3.0 变更
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);