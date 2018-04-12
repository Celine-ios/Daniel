import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

class Inputs extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'grey',
            fontWeight: 'bolder',
            fontSize: 20,
            position: 'absolute',
            marginTop: '15%',
            marginLeft: '5%'
          }}>
          Prestige
        </Text>
        <Text 
          style={{
            
            position: 'absolute',
            
          }}></Text>
        <View style={{ position: 'absolute', width: '100%', marginTop: '35%' }}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.submitButtonText}> Iniciar Sesión </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 25,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: '5% 10% 5% 10%',
    marginLeft: 15,
    height: 40,
    width: '40%'
  },
  submitButtonText: {
    color: 'white',
  },
});

