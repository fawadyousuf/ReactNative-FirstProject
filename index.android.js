/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >FawadYousuf</Text>
        <Text >
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Text style={styles.instructions}>
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject1', () => AwesomeProject1);*/

import {
  AppRegistry 
} from 'react-native'

import App from './src/App'

AppRegistry.registerComponent('AwesomeProject1' , () => App)