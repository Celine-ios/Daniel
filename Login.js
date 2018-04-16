import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render(){
      return (
         <View style = {styles.container}>
          <Text style={{margin: 10,fontWeight: 'bolder',color: 'grey'}}>Prestige</Text>
          <Text style={{fontSize: 12, margin: 8,color: 'grey'}}>Lorem ipsum dolorum matame en lskds</Text>
          <Text style={{marginLeft: 10,marginTop: 6, fontSize: 10, color: 'grey'}}>CORREO ELECTRÓNICO</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text style={{marginLeft: 10,marginTop: 6, fontSize: 10, color: 'grey'}}>CONTRASEÑA</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          <Text style={{fontWeight: 'bolder', color: 'grey', fontSize: 12,margin: 4, paddingLeft: 6}}>Clases de Inglés</Text>
          <Text style={{color: 'grey', fontSize: 10, margin: 8}}>Lorem ipsum dolorum et amen es le pplaticem en la pera de la manzana en el pedo de tuma mam ldsdsñdlsñdslds</Text>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 12,
      height: 20,
      borderColor: 'grey',
      borderWidth: 1,
     borderRadius: 2,
     padding: 4,
     fontSize: 4
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      width: 90,
      padding: 10,
     borderRadius: 2,
     margin: 10
   },
   submitButtonText:{
     
      fontSize: 10,
      color: 'white'
   }
})