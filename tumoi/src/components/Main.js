import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Fillter from './Fillter';
import Header from './Header';
import Form from './Form';
class Main extends Component{
    getWorodList(){
        const{myFillter, myWords} = this.props;
        if(myFillter === 'MEMORIZED') return myWords.filter(e=>e.memorized)
        if(myFillter==='NEED_PRATICE') return myWords.filter(e=>!e.memorized)
        return myWords
    }
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'yellow', alignSelf:'stretch', justifyContent:'center', }}>
            <Header/>
            {this.props.myIsAdding ?<Form/>: null}
              <View style={{flex: 10}}>
              <FlatList
                data = {this.getWorodList()}
                renderItem={({item}) => <Word myword ={item}/>}
                keyExtractor ={item =>item.id}
              />
              </View>
              <Fillter/>
             
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
        myFillter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding
    };
}
export default connect(mapStateToProps)(Main);