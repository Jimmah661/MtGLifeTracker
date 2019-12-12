import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ToolbarAndroid } from 'react-native';
import Tracker from './component/tracker';
import Footer from './component/footer';
import SelectionScreen from './component/selectionScreen';

export default class App extends Component {
  state={
    isActive: false,
    players: ["1", "2"],
    startingLife: 20
  }

  startGame = () => {
    this.setState({isActive: true})
  }

  increaseLife = () => {
    this.setState({startingLife: this.state.startingLife+10})
  }
  
  decreaseLife = () => {
    this.setState({startingLife: this.state.startingLife-10})
  }
  
  render() {
    return (this.state.isActive ? 
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Tracker startingLife={this.state.startingLife} player="1" rotate={true}/>
        <Tracker startingLife={this.state.startingLife} player="2" />
      </View>
      :
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SelectionScreen 
          startGame={this.startGame} 
          startingLife={this.state.startingLife} 
          increaseLife={this.increaseLife} 
          decreaseLife={this.decreaseLife} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454f',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
