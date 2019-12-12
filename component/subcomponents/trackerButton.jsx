import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

class TrackerButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.background}
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}
        onPressOut={this.props.onPressOut}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  column: {
    flexDirection: "column",
    width: "100%"
  },
  columnRotateUp: {
    transform: [{ rotate: "180deg" }]
  },
  columnRotateLeft: {
    transform: [{ rotate: "270deg" }]
  },
  columnRotateRight: {
    transform: [{ rotate: "90deg" }]
  },
  textable: {
    color: "yellow",
    fontSize: 50,
    paddingHorizontal: 10
  },
  input: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 40,
    color: "yellow",
    textAlign: "center"
  },
  nameText: {
    color: "yellow",
    fontSize: 15
  },
  modal: {
    backgroundColor: "green",
    padding: 20
  }
});


export default TrackerButton;
