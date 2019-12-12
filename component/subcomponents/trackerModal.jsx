import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TextInput
} from "react-native";

class TrackerModal extends Component {
  render() {
    return (
      <Modal
          style={{ height: "100%" }}
          visible={this.props.modalIsOpen}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modal}>
            <TextInput style={styles.input} onChange={this.props.onChangeText}>
              {this.props.name}
            </TextInput>
            <Button
              title="Close"
              onPress={this.props.changeModalIsOpen}
            />
          </View>
        </Modal>
    )
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

export default TrackerModal;
