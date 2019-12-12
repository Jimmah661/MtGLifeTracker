import React, { Component } from "react";
import { View, StyleSheet, Modal, Button, TextInput } from "react-native";

class TrackerModal extends Component {
  render() {
    return (
      <Modal
        visible={this.props.modalIsOpen}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <TextInput style={styles.input} onChange={this.props.onChangeText}>
              {this.props.name}
            </TextInput>
            <Button title="Close" onPress={this.props.changeModalIsOpen} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalView: {
    backgroundColor: "green",
    width: "100%",
    padding: 20
  },
  input: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 40,
    color: "yellow",
    textAlign: "center"
  }
});

export default TrackerModal;
