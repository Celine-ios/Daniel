import React, { Component } from 'react';
import { View,Text } from 'react-native';
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      
        
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
               Inicio
            </Text>
           
        </View>

         <Text style={{
              
              position: 'absolute',
              color: 'black',
              marginTop: '20%',
              marginLeft: '25%'
              
              
            }}>Ver todas las Unidades</Text>
        
      
    );
  }
}



