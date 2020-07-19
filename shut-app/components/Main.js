import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class Main extends React.Component {
  state = { name: '' } 
  onPress = () => {
  this.props.navigation.navigate('Chat', { name: this.state.name });
}
  onChangeText = name => this.setState({ name });
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text> 
        <TextInput
          style={styles.nameInput}
          placeHolder="User Name"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: { // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { // 5.
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;