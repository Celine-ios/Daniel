import React, { Component } from 'react';
import { View,Text } from 'react-native';

    export default class FlexDimensionsBasics extends Component {

  render() {

    return (

           

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>  

          <View style={{backgroundColor: '#2E4053',width: '100%',height: '16%'}} >
        
        <Text style={{color: '#fff',fontSize: 20, marginTop: '16%',marginLeft: '4%'}}>
        P.
        </Text>
        
        <Text style={{
          
            position: 'absolute',
            color: '#5D6D7E',
            marginTop: '17.5%',
            marginLeft: '14%'
            
            }}>
              |  Inicio
            </Text>
           
        </View>

         <Text style={{
              
              position: 'absolute',
              color: 'grey',
              marginTop: '40%',
              marginLeft: '27%',
              
              
              
            }}>Ver todas las Unidades</Text>
            
            <Text style={{
              position: 'absolute',
              marginLeft: '15%',
              marginTop: '55%'
            }}>UNIDAD</Text>
            
            <Text style={{
              position: 'absolute',
              marginLeft: '15%',
              marginTop: '65%',
              color: 'grey'
            }}>SALUDOS EN INGLÉS</Text>
            
            <Text style={{
              position: 'absolute',
              marginLeft: '15%',
              marginTop: '80%',
              color: 'grey'
            }}>Cómo estás?</Text>
            
            <Text style={{
              position: 'absolute',
              marginLeft: '15%',
              marginTop: '90%',
              color: 'grey',
              padding: '2%'
            }}>Adiós</Text>
            
            <Text style={{
              position: 'absolute',
              marginLeft: '15%',
              marginTop: '100%',
              color: 'grey',
              padding: '2%'
            }}>Chao</Text>
            </View>
            
      
    );
  }
}







