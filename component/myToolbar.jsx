import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ToolbarAndroid } from 'react-native';

class MyToolbar extends Component {
  render() {
    return(
      <View style={styles.toolbar}>
        {(this.props.isActive) ? <Button title="Back" onPress={this.props.changeIsActive}/>:<></>}
        <Text>Testing</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    borderBottomColor: "black",
  }
})

export default MyToolbar;
