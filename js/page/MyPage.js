import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

export default class MyPage extends Component{
  render(){
      const {navigation} = this.props;
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> MyPage </Text>
            <Button
                title="改变主题色"
                onPress={()=>{
                    navigation.setParams({
                            theme:{
                                tintColor:'blue',
                                updateTime:new Date().getTime()
                            }
                        }
                    )
                }
                }
            />
       </View>
     );
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
  }
});

