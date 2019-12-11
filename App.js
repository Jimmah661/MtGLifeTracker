import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tracker from './component/tracker';
import Footer from './component/footer';
import SelectionScreen from './component/selectionScreen';

export default class App extends Component {
  state={
    selection: true,
    players: ["1", "2"],
    startingLife: 0
  }

  startGame = () => {
    this.setState({selection: true})
  }
  
  render() {
    return (this.state.selection ? 
      <View style={styles.container}>
        <Tracker startingLife={this.state.startingLife} player="1" rotate={true}/>
        <Tracker startingLife={this.state.startingLife} player="2" />
        {/* {this.state.players.map((item, index) => {
          return (
            <Tracker player={item} key={index}/>
          )
        })} */}
        {/* <Footer /> */}
      </View>
      :
      <View style={styles.container}>
        <SelectionScreen startGame={this.startGame} />
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
