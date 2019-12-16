import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

class SelectionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={(this.props.numberOfPlayers === this.props.number) ? styles.buttonHighlight : styles.button}
        onPress={() => this.props.onPress(this.props.number)}
      >
        <Text style={(this.props.numberOfPlayers === this.props.number) ? styles.buttonFontHighlight : styles.buttonFont}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  buttonFontHighlight: {
    color: "yellow",
    fontSize: 30,
    padding: 5,
color: "black"
  }
});

export default SelectionButton;
