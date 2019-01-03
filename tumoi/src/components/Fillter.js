import React, { Component } from 'react';
import {View, Text , TouchableOpacity , StyleSheet} from 'react-native';
import {connect} from 'react-redux'

 class Fillter extends Component{
     getTextStyle(statusName){
         const {myFillterStatus}= this.props;
         if(statusName === myFillterStatus) return {color: 'yellow', fontWeight: 'bold',};
         return styles.text;
     }
     setFilterStatus(actionType){
         this.props.dispatch({type: actionType});
     }
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={() =>this.setFilterStatus('FILTER_SHOW_ALL')}>
                <Text style={this.getTextStyle('SHOW_ALL')}> Show All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.setFilterStatus('FILTER_MEMORIZED')}>
                <Text style={this.getTextStyle('MEMORIZED')}>Memorized</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.setFilterStatus('FILTER_NEED_PRATICE')}>
                <Text style={this.getTextStyle('NEED_PRATICE')}>Need Pratice</Text>
            </TouchableOpacity>
          </View>
        )
       
    }

}
function mapStateToProp(state){
    return {myFillterStatus: state.filterStatus}
}
export default connect(mapStateToProp)(Fillter);

const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor: 'blue', alignSelf:'stretch', flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text:{
        color:'white'
    }

})