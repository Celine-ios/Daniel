import React, { Component } from 'react';
import { View,Text } from 'react-native';

    export default class FlexDimensionsBasics extends Component {

  render() {

    return (

           

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>  

          <View style={{backgroundColor: 'grey',width: '100%',height: '16%'}} >
        
        <Text style={{color: '#fff',fontSize: 20, marginTop: '16%',marginLeft: '4%'}}>
        P.
        </Text>
        
        <Text style={{
          
            position: 'absolute',
            color: 'blue',
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
            
            </View>
            
      
    );
  }
}







