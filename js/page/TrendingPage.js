import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class TrendingPage extends Component{
  render(){
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> TrendingPage </Text>
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

