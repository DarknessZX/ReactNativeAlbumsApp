import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={{width : 100, height : 100}} source={{uri : props.album.thumbnail_image }}></Image>
        </View>
        <View style={styles.textHeaderStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={ {uri : props.album.image } }></Image>
      </CardSection
    </Card>
  )
}

const styles = {
  textHeaderStyle : {
    justifyContent : 'space-around',
    paddingLeft : 20
  }
}

export default AlbumDetail;
