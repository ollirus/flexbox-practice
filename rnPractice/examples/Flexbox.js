/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Flexbox extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {
          backgroundColor: 'powderblue',
          // flexGrow: 1, 
          // flexShrink: 1,          
          }]} />
        <View style={[styles.box, {
          backgroundColor: 'skyblue',
          maxHeight: 100,
          // flexGrow: 4,
          // flexShrink: 2,
          }]} />
        {/* <View style={[styles.box, {backgroundColor: 'steelblue'}]} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // determines the primary axis of its layout: 
    // row or column
    flexDirection: 'row',
    // determines the distribution of children along the primary axis
    // flex-start, center, flex-end, space-around, and space-between
    justifyContent: 'flex-start',
    // determines the alignment of children along the secondary axis
    // flex-start, center, flex-end, and stretch.
    alignItems: 'stretch',
    // flexWrap: 'wrap',    
    // top: 30,
    backgroundColor: 'red',
    borderWidth: 50,
  },
  box: {
    width: 50, 
    // height: 50,
    // marginHorizontal: 5,
    // marginVertical: 5,
  },
});
