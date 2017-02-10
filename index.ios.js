/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

export default class GeoLocationMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 40.712784,
        longitude: -74.005941,
        latitudeDelta: 10,
        longitudeDelta: 10,
      },
      annotations: [{
        latitude: 40.72052634,
        longitude: -73.97686958312988,
        title: 'New York',
        subtitle: 'This is cool!',
      }],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.desc}>
          <Text> Maps </Text>
        </View>
        <MapView
          style={styles.map}
          region={this.state.region}
          annotations={this.state.annotations}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  desc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 5,
  },
});

AppRegistry.registerComponent('GeoLocationMap', () => GeoLocationMap);
