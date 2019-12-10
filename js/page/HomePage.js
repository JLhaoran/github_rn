import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigators/NavigationUtil';
import DynamicTabNavigator from  '../navigators/DynamicTabNavigator';

import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import BackPressComponent from "../common/BackPressComponent";

 class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.backPress = new BackPressComponent({backPress: this.onBackPress});
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }
    /**
     * 处理 Android 中的物理返回键
     * https://reactnavigation.org/docs/en/redux-integration.html#handling-the-hardware-back-button-in-android
     * @returns {boolean}
     */
    onBackPress = () => {
        const {dispatch, nav} = this.props;
        //if (nav.index === 0) {
        if (nav.routes[1].index === 0) {//如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
    // _tabNavigator(){
    //     const BottomTabNavigator = createBottomTabNavigator({
    //         PopularPage: {
    //             screen: PopularPage,
    //             navigationOptions: {
    //                 tabBarLabel: '最热',
    //                 tabBarIcon: ({tintColor, focused}) => (
    //                     <MaterialIcons
    //                         name={'whatshot'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 ),
    //             }
    //         },
    //         TrendingPage: {
    //             screen: TrendingPage,
    //             navigationOptions: {
    //                 tabBarLabel: '趋势',
    //                 tabBarIcon: ({tintColor, focused}) => (
    //                     <Ionicons
    //                         name={'md-trending-up'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 ),
    //             }
    //         },
    //         FavoritePage: {
    //             screen: FavoritePage,
    //             navigationOptions: {
    //                 tabBarLabel: '收藏',
    //                 tabBarIcon: ({tintColor, focused}) => (
    //                     <MaterialIcons
    //                         name={'favorite'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 ),
    //             }
    //         },
    //         MyPage: {
    //             screen: MyPage,
    //             navigationOptions: {
    //                 tabBarLabel: '我的',
    //                 tabBarIcon: ({tintColor, focused}) => (
    //                     <Entypo
    //                         name={'user'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 ),
    //             }
    //         },
    //     });
    //     return createAppContainer(BottomTabNavigator);
    // }
  render(){
       NavigationUtil.navigation = this.props.navigation;
       // const Tab = this._tabNavigator();
       return <DynamicTabNavigator/>
  }
}

const mapStateToProps = state => ({
    nav: state.nav
});

//注意：connect只是个function，并不应定非要放在export后面
export default connect(mapStateToProps)(HomePage);


