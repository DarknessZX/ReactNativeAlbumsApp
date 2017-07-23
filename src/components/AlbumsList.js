import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumsList : []
    }
  };

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then((data) => { return data.json() })
      .then((dataJson) => {
        this.setState({ albumsList : dataJson });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderAlbum() {
    return this.state.albumsList.map((album) => {
      return (
        <AlbumDetail key={album.title} album = {album} />
      )
    })
  };

  render() {
    return (
      <View>
        {this.renderAlbum()}
      </View>
    )
  };
}

export default AlbumsList;
