import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tracker from './component/tracker';

export default class App extends Component {
  state={
    players: 2
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Tracker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
