import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class DetailPage extends Component{
  render(){
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> DetailPage </Text>
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

