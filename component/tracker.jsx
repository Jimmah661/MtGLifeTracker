import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Tracker extends Component {
    state = {
        value: 40
    }

    increaseValue = () => {
        this.setState({
            value: this.state.value+1
        })
    }

    bigIncreaseValue = () => {
        this.setState({
            value: this.state.value+10
        })
    }

    decreaseValue = () => {
        this.setState({
            value: this.state.value-1
        })
    }

    bigDecreaseValue = () => {
        this.setState({
            value: this.state.value-10
        })
    }

    render() {
        return(
            <View style={styles.row}>
                <TouchableOpacity style={styles.background} onPress={this.decreaseValue} onLongPress={this.bigDecreaseValue}>
                    <Text style={styles.textable}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textable}>{this.state.value}</Text>
                <TouchableOpacity style={styles.background} onPress={this.increaseValue} onLongPress={this.bigIncreaseValue}>
                    <Text style={styles.textable}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    textable: {
        color: "yellow",
        fontSize: 50,
        paddingHorizontal: 10
    },
    background: {
        // backgroundColor: "#fff"
    }
  });

export default Tracker;