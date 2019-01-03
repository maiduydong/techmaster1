import React, { Component } from 'react';
import { TextInput, View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

 class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            en: '',
            vn:'',
        };
        this.onAdd = this.onAdd.bind(this)
    }
    onAdd(){
        const {en, vn} = this.state;
        this.props.dispatch({
            type: 'ADD_WORD',
            en,
            vn
        })
        this.props.dispatch({

        type:'IS_ADDING'
        })
    }
    render(){return(<View style ={styles.container}>
        <TextInput 
            style= {styles.TextInput}
            value = {this.state.en}
            onChangeText={text=>this.setState({en: text})}
            placeholder ="English"
        ></TextInput>
        <TextInput 
            style= {styles.TextInput}
            value = {this.state.vn}
            onChangeText={text =>this.setState({vn:text})}
            placeholder="Vietnam"
        ></TextInput>
        <TouchableOpacity onPress ={this.onAdd}><Text>Add</Text></TouchableOpacity>
        </View>
    )
    }
}
export default connect()(Form)
const styles = StyleSheet.create({
    TextInput:{
        backgroundColor:'white',
        height: 50,
        width: 300,
        margin: 20
    },
    container:{ justifyContent: 'center',
    alignItems: 'center',
}
})