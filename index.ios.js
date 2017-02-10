/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
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
      mapRegion: {
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
          <Text style={styles.title}>
            MAPS
          </Text>
        </View>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  desc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  map: {
    position: 'absolute',
    top: 100,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

AppRegistry.registerComponent('GeoLocationMap', () => GeoLocationMap);
