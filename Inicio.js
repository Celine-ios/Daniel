import React, { Component } from 'react';
import {

  View,
 Text,
 StyleSheet

 } from 'react-native';

class Inicio extends Component {

  
     render() {

       return(

          <View style={{backgroundColor: '#A9A6AB', width: '100%', height: '100%'}}>
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

        <View style={{

          backgroundColor: '#fff',
          width: '90%',
          marginLeft: '5%',
          border: '1px solid grey',
          borderRadius: '2%',
          marginTop: '4%'
               
        }}>
          <View style={{

            color: 'aqua',
            fontSize: 10,
            padding: 4
            
          }}>
        <Text>Tienes una clase</Text>

            <Text style={{color: 'grey',fontSize: 8,marginLeft: '75%',marginTop: '0%'}}>en 5 min</Text>

          </View>
          <View style={{

          }}>
          <Text style={{

            color: '#8732C5',
            padding: 4,
            fontSize: '10',
            fontWeight: 'bolder'
                
          }}>
            Anamileth Barreto te está esperando para una clase de Ver to be
          </Text>
          <Text style={{

            color: 'aqua',
            fontSize: '8',
            marginLeft: '6%',
            padding: '4%'
          }}>COMENZAR CLASE</Text>  
          </View>
        </View>

        <View style={{

          backgroundColor: '#fff',
          width: '90%',
          marginLeft: '5%',
          border: '1px solid grey',
          borderRadius: '2%',
          marginTop: '4%'

        }}>
          <Text style={{
              fontSize: 6,
              margin: 10,
              color: 'grey',
              
            }}>PROGRESO DEL CURSO</Text>
            <Text style={{

              fontSize: 8,
              margin: 5,
              color: '#1C2833'
            }}>PASO A PASO</Text>
            <View style={{

              width: '40%',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              fontSize: 10

            }}>
              <Text style={styles.option}>PENDIENTE</Text>
              <Text style={styles.option}>COMPLETADA</Text>
            </View>
            <View style={styles.classBlock}>
              <View style={{

                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row'

              }}>
                <View style={styles.block}>
                 <Text style={{margin: 2, paddingLeft: 8}}> |</Text>
                  </View>
                  <View>
                  <Text style={styles.unidad}>UNIDAD 1</Text>
                <Text style={styles.mainblock}>Saludos en Inglés</Text>
                </View>
              </View>
            </View>
            <View style={{color: 'grey',fontSize: 6, margin: 8}}>75% Completada</View>
            </View>
        </View>

         
         
         );
       
     }
  
}
export default Inicio;

const styles = StyleSheet.create({

    option: {

      margin: 4,
      fontSize: 5,
      color: 'grey'
      
    },

    select: {

      margin: 4,
      fontSize: 5,
      color: 'red'

    },

    classBlock: {

      margin: 4,
      width: '100%',
      height: '60%'

    },

    block: {

      width: '15%',
      height: '80%',
      backgroundColor: 'grey',
      margin: 1

    },

    mainblock: {

      margin: 4,
      fontSize: 6,
      color: 'grey'

    },

    unidad: {

      fontSize: 6,
      margin: 1,
      marginLeft: 5

    },

    avance: {

      margin: 2

    }

});
