import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.headerContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri : props.album.thumbnail_image }}></Image>
          <View style={styles.textHeaderStyle}>
            <Text style={styles.textTitleStyle}>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.albumCoverStyle} source={ {uri : props.album.image } }></Image>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)}>
          Buy now !!!
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContainerStyle : {
    padding : 5,
    borderBottomWidth : 1,
    flexDirection : 'row',
    flex : 1
  },
  textHeaderStyle : {
    justifyContent : 'space-around',
    paddingLeft : 20
  },
  textTitleStyle : {
    fontSize : 20,
    fontWeight : 'bold'
  },
  thumbnailStyle : {
    width : 100,
    height : 100
  },
  albumCoverStyle : {
    flex : 1,
    height : 400
  }
}

export default AlbumDetail;
