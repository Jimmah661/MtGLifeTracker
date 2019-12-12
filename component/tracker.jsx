import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import TrackerModal from "./subcomponents/trackerModal";
import TrackerButton from './subcomponents/trackerButton';

class Tracker extends Component {
  state = {
    value: 40,
    name: "Player " + this.props.player,
    modalIsOpen: false
  };

  timer = null;

  increaseValue = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  changeModalIsOpen = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  bigIncreaseValue = () => {
    this.setState({
      value: this.state.value + 10
    });
    this.timer = setTimeout(this.bigIncreaseValue, 500);
  };

  decreaseValue = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  bigDecreaseValue = () => {
    this.setState({
      value: this.state.value - 10
    });
    this.timer = setTimeout(this.bigDecreaseValue, 500);
  };

  cancelTimeout = () => {
    clearTimeout(this.timer);
  };

  onChangeText = event => {
    let newName = event.nativeEvent.text;
    this.setState({ name: newName });
  };

  render() {
    return (
      <View
        style={(styles.column, this.props.rotate ? styles.columnRotateUp : {})}
      >
        <View style={styles.row}>
          {/* MINUS BUTTON FUNCTION */}
          <TrackerButton
            onPress={this.decreaseValue}
            onLongPress={this.bigDecreaseValue}
            onPressOut={this.cancelTimeout}
          >
            <Text style={styles.textable}>-</Text>
          </TrackerButton>
          {/* LIFE VALUE DISPLAY */}
          <Text style={styles.textable}>{this.state.value}</Text>
          {/* PLUS BUTTON FUNCTION */}
          <TrackerButton
            onPress={this.increaseValue}
            onLongPress={this.bigIncreaseValue}
            onPressOut={this.cancelTimeout}
          >
            <Text style={styles.textable}>+</Text>
          </TrackerButton>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ modalIsOpen: !this.state.modalIsOpen });
            }}
          >
            <Text style={styles.nameText}>{this.state.name}</Text>
          </TouchableOpacity>
        </View>
        <TrackerModal
          modalIsOpen={this.state.modalIsOpen}
          onChangeText={this.onChangeText}
          name={this.state.name}
          changeModalIsOpen={this.changeModalIsOpen}
        />
      </View>
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

export default Tracker;
