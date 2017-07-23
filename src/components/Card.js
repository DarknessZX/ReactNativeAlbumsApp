import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    borderWidth : 1,
    borderRadius : 5,
    margin : 5
  }
}

export default Card;
