import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, StyleSheet
 } from 'react-native';
 import {connect} from 'react-redux'
class Header extends Component{
     render(){
         return(
             <View style ={styles.container}>
                 <Text>MY Words</Text>
                 <TouchableOpacity onPress={()=>this.props.dispatch({type:'IS_ADDING'})}> 
                     <Text>+</Text>
                 </TouchableOpacity>
             </View>
         )
     }
 }
 export default connect()(Header)
 const styles = StyleSheet.create({
    container:{
            height: 50,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            margin :20
    }
 })