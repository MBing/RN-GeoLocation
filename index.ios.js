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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({
        latitude: lastPosition.coords.latitude,
      });
      this.setState({
        longitude: lastPosition.coords.longitude,
      });

      let newRegion = {
        latitude: lastPosition.coords.latitude,
        longitude: lastPosition.coords.longitude,
        latitudeDelta: 10,
        longitudeDelta: 10,
      };

      this.setState({
        region: newRegion,
      });

      this.setState({
        annotations: [{
          latitude: lastPosition.coords.latitude,
          longitude: lastPosition.coords.longitude,
          title: 'Current Location',
          subtitle: 'You are here'
        }],
      });
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.desc}>
          <Text style={styles.titleLat}>
            latitude: {this.state.latitude}
          </Text>
          <Text style={styles.titleLong}>
            longitude: {this.state.longitude}
          </Text>
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
  titleLat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  titleLong: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
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
