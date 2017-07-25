import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle} >{props.children}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle : {
    flex : 1,
    backgroundColor : '#ffffff',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#007aff',
    justifyContent : 'center',
    marginTop : 5,
    marginBottom : 5
  },
  textStyle : {
    alignSelf : 'center',
    paddingTop : 10,
    paddingBottom : 10
  }
}

export default Button;
