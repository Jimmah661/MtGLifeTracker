import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal, Button, TextInput } from "react-native";

class Footer extends Component {
  render() {
    return(
      <View style={Styles.background}></View>
    )
  }
}

const Styles = StyleSheet.create({
  background: {
    backgroundColor: "blue"
  }
})

export default Footer;