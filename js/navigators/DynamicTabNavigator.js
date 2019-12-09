import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';

import NavigationUtil from './NavigationUtil';


import {connect} from 'react-redux';//订阅

const TABS = {PopularPage: {
    screen: PopularPage,
    navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({tintColor, focused}) => (
            <MaterialIcons
                name={'whatshot'}
                size={26}
                style={{color:tintColor}}
            />
        ),
    }
},
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
};

 class DynamicTabNavigator extends React.Component{
    _tabNavigator(){
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
        const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage};//根据需要定制显示的tab
        // PopularPage.navigationOptions.tabBarLabel = '最新';//动态配置Tab标签文字
        return createAppContainer(createBottomTabNavigator(tabs,{
            // tabBarComponent:TabBarComponent
            tabBarComponent: props => {
                return <TabBarComponent theme={this.props.theme} {...props}/>
            }
        }));
    }
  render(){
       const Tab = this._tabNavigator();
       return <Tab/>
  }
}

class TabBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.theme = {
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime(),
        };
    }
    render(){
        //普通方法改变主题
        // const {routes,index} = this.props.navigation.state;
        // if(routes[index].params){
        //     const {theme} = routes[index].params;
        //     if(theme && theme.updateTime > this.theme.updateTime){
        //         this.theme = theme;
        //     }
        // }
        // return <BottomTabBar
        //     {...this.props}
        //     activeTintColor = {this.theme.tintColor || this.props.activeTintColor}
        // />

        return <BottomTabBar
            {...this.props}
            activeTintColor = {this.props.theme}
        />
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);


