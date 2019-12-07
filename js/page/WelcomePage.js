import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import NavigationUtil from '../navigators/NavigationUtil';

export default class WelcomePage extends React.Component{

    componentDidMount(){
        this.timer = setTimeout( ()=>{
            // const {navigation} = this.props;
            // navigation.navigate("Main");
            NavigationUtil.resetToHomePage(this.props)
            },1000);
    }

    componentWillUnmount(){
        this.timer&& clearTimeout(this.timer);
    }

  render(){
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> Welcome </Text>
       </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  }
});

