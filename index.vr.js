import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WorldTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('360image5.jpg')}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('WorldTour', () => WorldTour);
