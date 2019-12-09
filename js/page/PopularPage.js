import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigators/NavigationUtil';
import DetailPage from './DetailPage';

export default class PopularPage extends Component{
    constructor(props){
        super(props);
        this.tabNames = ['Java','Android','IOS','React','React Native'];
    }

    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index) =>{
            tabs[index]={
                // screen:PopularTab,
                screen:props => <PopularTab {...props} tabLabel={item}/> ,
                navigationOptions:{
                    tabBarLabel: item,
                    title:item,
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons
                            name={'ios-home'}
                            size={26}
                        />
                    ),
                }
            }
            }
        );
        return tabs;
    }

    _createMaterialTopTabNavigator(){
        const TabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
                PopularTab1: {
                    screen: PopularTab,
                    navigationOptions: {
                        tabBarLabel: 'Android',
                        title:'Android TAB',
                        tabBarIcon: ({tintColor, focused}) => (
                            <Ionicons
                                name={'ios-home'}
                                size={26}
                            />
                        ),
                    }
                },
                PopularTab2: {
                    screen: PopularTab,
                    navigationOptions: {
                        tabBarLabel: 'IOS',
                        title:'IOS TAB',
                        tabBarIcon: ({tintColor, focused}) => (
                            <Ionicons
                                name={'ios-people'}
                                size={26}
                            />
                        ),
                    }
                }}
        );
        return  createAppContainer(TabNavigator);

    }

    _new_createMaterialTopTabNavigator(){
        const TabNavigator = createMaterialTopTabNavigator(this._genTabs(),{
            tabBarOptions:{
                tabStyle:styles.tabStyle,
                upperCaseLabel:false, //是否使用标签大写，默认为true
                scrollEnabled:true,
                style:{
                    backgroundColor:'#678',              //TabBar 的背景颜色
                    indicatorStyle:styles.indicatorStyle,//标签指示器的样式
                    labelStyle:styles.labelStyle,//文字的样式
                }
            }
        });
        return  createAppContainer(TabNavigator);
    }

  render(){
      // const Tab = this._createMaterialTopTabNavigator();
      const Tab = this._new_createMaterialTopTabNavigator();
      return  <Tab/>;
  }
}
class PopularTab extends React.Component{
    render(){
        const {tabLabel}=this.props;
        return<View style={styles.container}>
            <Text style={styles.welcome}>{tabLabel}</Text>
            <Button
                title="跳到详情页"
                onPress={()=>{
                    NavigationUtil.goPage({
                        navigation:NavigationUtil.navigation
                    },"DetailPage");
                }

                }
            />
        </View>
    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
      justifyContent:'center'

  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  },
    tabStyle:{
        minWidth:50,
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'red'
    },
    labelStyle:{
        fontSize:13,
        marginTop:6,
        marginBottom:6,
    }

});

