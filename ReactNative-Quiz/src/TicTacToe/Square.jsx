import React from 'react';

import {Text, TouchableHighlight,StyleSheet} from 'react-native';



export default function Square(props) {
  
  function squareClick() {
    if(props.value === "-") {
      props.boardClick(props.rowIndex, props.columnIndex);
    }
  }

  return(
    <TouchableHighlight style={styles.square} onPress={squareClick} >
      <Text style ={styles.squareText}>{props.value}</Text>
    </TouchableHighlight>
  );
  
}
const styles = StyleSheet.create({
  square: {flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: '#eee'
    
          },

  squareText: {fontSize: 60
          }
});