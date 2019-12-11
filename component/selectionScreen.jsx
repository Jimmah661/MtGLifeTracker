import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class SelectionScreen extends Component {
  state = {
    startingLife: 20
  };

  render() {
    return (
      <View>
        <Text style={styles.textable}>How many players?</Text>
        <View style={styles.row}>
          <TouchableOpacity
            id="1"
            name="test"
            style={styles.button}
            onPress={() => console.log(this)}
          >
            <Text style={styles.buttonFont}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.button, styles.buttonHighlight)}
            onPress={event => console.log(event.target)}
          >
            <Text style={styles.buttonFont, styles.buttonFontHighlight}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={event => console.log(event.target)}
          >
            <Text style={styles.buttonFont}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={event => console.log(event.target)}
          >
            <Text style={styles.buttonFont}>4</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textable}>Starting life total</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              this.setState({ startingLife: this.state.startingLife - 10 })
            }
          >
            <Text style={styles.textable}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textable}>{this.state.startingLife}</Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({ startingLife: this.state.startingLife + 10 })
            }
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
    paddingHorizontal: 10
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
