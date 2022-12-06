import React from 'react';


import {Text, TouchableHighlight,StyleSheet} from 'react-native';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <TouchableHighlight style={StyleSheet.button} onPress={click} >
      <Text>Reset</Text>
    </TouchableHighlight>
  );
    
}

const styles = StyleSheet.create({
              button: {
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: '#eee',
              fontSize: 25,
              textAlign: 'center',
              padding: 10
    }

});