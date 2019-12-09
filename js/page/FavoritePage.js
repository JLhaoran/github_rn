import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

export default class FavoritePage extends Component{
  render(){
      const {navigation} = this.props;
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> FavoritePage </Text>
            <Button
                title="改变主题色"
                onPress={()=>{
                    navigation.setParams({
                            theme:{
                                tintColor:'green',
                                updateTime:new Date().getTime()
                            }
                        }

                    );
                    console.log("收藏改变主题色");
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

