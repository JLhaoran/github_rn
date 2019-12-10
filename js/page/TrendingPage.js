import React,{Component} from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native';

import {connect} from 'react-redux';
import actions from '../action/index'

export  class TrendingPage extends Component{
  render(){
      const {navigation} = this.props;
    return(
        <View style={styles.container}>
        <Text style={styles.welcome}> TrendingPage </Text>
            <Button
              title="改变主题色"
              onPress={()=>{
       //           navigation.setParams({
       //               theme:{
       //                    tintColor:'red',
       //                    updateTime:new Date().getTime()
       //                }
       //                }
       //            )
                  this.props.onThemeChange('#096')
              }
              }
            />
       </View>
     );
  }
}


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onThemeChange:theme => dispatch(actions.onThemeChange(theme))
});
//注意：connect只是个function，并不应定非要放在export后面
export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);

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
})

