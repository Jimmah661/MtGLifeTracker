import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

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
  background: {

  },
});


export default TrackerButton;
