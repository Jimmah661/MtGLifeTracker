import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SelectionButton from './subcomponents/selectionButton';

class SelectionScreen extends Component {
  state = {
    numberOfPlayers: 0
  };

  setPlayers = (players) => {
    this.setState({numberOfPlayers: players})
  }

  render() {
    return (
      <View>
        <Text style={styles.textable}>How many players?</Text>
        <View style={styles.row}>
          <SelectionButton onPress={this.setPlayers} number={2} numberOfPlayers={this.state.numberOfPlayers}/>
          <SelectionButton onPress={this.setPlayers} number={3} numberOfPlayers={this.state.numberOfPlayers}/>
          <SelectionButton onPress={this.setPlayers} number={4} numberOfPlayers={this.state.numberOfPlayers}/>
          <SelectionButton onPress={this.setPlayers} number={5} numberOfPlayers={this.state.numberOfPlayers}/>
          <SelectionButton onPress={this.setPlayers} number={6} numberOfPlayers={this.state.numberOfPlayers}/>
        </View>

        <Text style={styles.textable}>Starting life total</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this.props.decreaseLife}
          >
            <Text style={styles.textable}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textable}>{this.props.startingLife}</Text>
          <TouchableOpacity
            onPress={this.props.increaseLife}
          >
            <Text style={styles.textable}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={this.props.startGame}
        >
          <Text style={styles.textable}>Start Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textable: {
    color: "yellow",
    fontSize: 40,
    paddingHorizontal: 10,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  button: {
    aspectRatio: 1,
    minWidth: "10%",
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  buttonFont: {
    color: "yellow",
    fontSize: 30,
    padding: 5
  },
  buttonHighlight: {
    aspectRatio: 1,
    minWidth: "10%",
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    opacity: .25
  },
  buttonFontHighlight: {
    opacity: 1,
    color: "yellow",
    fontSize: 30,
    padding: 5
  }
});

export default SelectionScreen;
