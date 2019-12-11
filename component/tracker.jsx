import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  TextInput
} from "react-native";

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

  bigIncreaseValue = () => {
    this.setState({
      value: this.state.value + 10
    });
    this.timer = setTimeout(this.bigIncreaseValue, 500)
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
    this.timer = setTimeout(this.bigDecreaseValue, 500)
  };

  cancelTimeout = () => {
    clearTimeout(this.timer)
  }

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
          <TouchableOpacity
            style={styles.background}
            onPress={this.decreaseValue}
            onLongPress={this.bigDecreaseValue}
            onPressOut={this.cancelTimeout}
          >
            <Text style={styles.textable}>-</Text>
          </TouchableOpacity>
          {/* LIFE VALUE DISPLAY */}
          <Text style={styles.textable}>{this.state.value}</Text>
          {/* PLUS BUTTON FUNCTION */}
          <TouchableOpacity
            style={styles.background}
            onPress={this.increaseValue}
            onLongPress={this.bigIncreaseValue}
            onPressOut={this.cancelTimeout}
          >
            <Text style={styles.textable}>+</Text>
          </TouchableOpacity>
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
        <Modal
          style={{ height: "100%" }}
          visible={this.state.modalIsOpen}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modal}>
            <TextInput style={styles.input} onChange={this.onChangeText}>
              {this.state.name}
            </TextInput>
            <Button
              title="Close"
              onPress={() => {
                this.setState({ modalIsOpen: !this.state.modalIsOpen });
              }}
            />
          </View>
        </Modal>
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
