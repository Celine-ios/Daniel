import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

    export default class Modulo extends Component {

  render() {

    return (

           
         
  
        <View style={{backgroundColor: '#EDEDED', width: '100%', height: '100%'}}>  

          <View style={{backgroundColor: '#2E4053',width: '100%',height: '16%'}} >
        
        <Text style={{color: '#fff',fontSize: 20, marginTop: '12%',marginLeft: '5%'}}>
        p.
        </Text>
        
        <Text style={{
          
            position: 'absolute',
            color: '#5D6D7E',
            marginTop: '15.5%',
            marginLeft: '18%',
            fontSize: 13
            
            }}>
              |  Inicio
            </Text>
           
        </View>
        <View style={{width: '90%',marginLeft: 8,
          borderRadius: '3%',backgroundColor: '#fff'}}>
          <View style={{width: '80%',margin: 16,borderColor: '#EDEDED',borderWidth: 1,borderRadius: '3%'}}>
            <Text style={{color: 'grey',fontSize: 8,margin: 8,marginLeft: 20}}>Ver todas las Unidades</Text>
          </View>
        </View>
        <View style={{width: '90%',marginLeft: 8,borderRadius: '3%',backgroundColor: '#fff', marginTop: 6}}>
          <Text style={{fontSize: 10,margin:10,color: 'grey'}}>UNIDAD 1</Text>
          <Text style={{fontSize: 8,margin: 10}}>SALUDOS EN INGLÉS</Text>
          <View>
          <Text style={styles.options}>Hola</Text>
          <Text style={styles.options}>Cómo estás?</Text>
          <Text style={styles.options}>Adiós</Text>
          <Text style={styles.options}>Chao</Text>
          </View>
        </View>
        
            </View>
            
      
    );
  }
}

const styles = StyleSheet.create({

    options: {
      margin: 10,
      color: 'grey',
      fontSize: 10
      
    }

    contentContainer: {

      paddingVertical: 20

    }

});







