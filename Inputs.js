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
            marginLeft: '5%',
          }}>
          Prestige
        </Text>
        <Text
          style={{
            position: 'absolute',
            color: 'black',
            fontWeight: 'bolder',
            fontSize: 15,
            marginTop: '25%',
            marginLeft: '5%',
          }}>
          Lorem ipsum dolorum et amen let strip a menus quix vous les
          clark
        </Text>
        <View style={{ position: 'absolute', width: '100%', marginTop: '35%' }}>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bolder',
              fontSize: '15',
              paddingLeft: '6%'
            }}>
            CORREO ELECTRÓNICO
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Correo Electrónico"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: 'bolder',
              fontSize: '15',
              paddingLeft: '6%'
            }}>
            CONTRASEÑA
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Contraseña"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.submitButtonText}> Iniciar Sesión </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'grey',
            fontWeight: 'bolder',
            marginTop: '4%',
          }}>
          Clases de Inglés
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 10,
          }}>
          Lorem ipsum dellorum etra basque mortiver e pas dan chess
          Text tedr ssachs ds  dsd sds
        </Text>
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
    borderColor: 'grey',
    borderWidth: 1,
    
  },
  submitButton: {
    backgroundColor: '#6A72F2',
    margin: 30,
    padding: '3% 2% 2% 3%',
    height: 40,
    width: '40%',
    borderRadius: '2%',
  },
  submitButtonText: {
    color: 'white',
  },
});
