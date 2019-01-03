import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Word extends Component{
    memorizedWord(){
        this.props.dispatch({
            type:'MEMORIZED',
            id: this.props.myword.id
        })
    }
    render(){
        const {en,vn, memorized} = this.props.myword
        const textDecorationLine = memorized ? 'line-through': 'none' ;
        const getTextMemorized = memorized ? 'foget' :'meorized'
        return(
            <View style={styles.container}>
                <Text style ={{textDecorationLine }}>{en}</Text>
                <Text>{vn}</Text>
                <View style ={styles.controller}>
                    <TouchableOpacity style={styles.button} onPress ={this.memorizedWord.bind(this)}>
                        <Text>{getTextMemorized}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button}>
                        <Text>
                                Show
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            
        )
    }
}
export default connect()(Word);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        padding: 10,
        margin: 10

    },
    controller:{

        flexDirection:'row',
        justifyContent: 'space-around',
        
    },
    button:{
        backgroundColor: 'white',
        padding:10
    }
})