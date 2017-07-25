/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

const App = () => {
  return (
    <View style={{flex : 1}}>
      <Header headerText = 'Albums!'/>
      <AlbumsList />
    </View>
  )
}

AppRegistry.registerComponent('albums', () => App);
