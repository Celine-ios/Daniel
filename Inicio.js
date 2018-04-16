import React, { Component } from 'react';
import {

  View,
 Text,
 StyleSheet,
  Image,
  ScrollView

 } from 'react-native';

class Inicio extends Component {

  
     render() {

       return(

        <ScrollView contentContainerStyle={styles.contentContainer} bounces='true' bouncesZoom='true' alwaysBounceVertical='true' style={styles.ScrollView} overflow='visible'>

          <View style={{backgroundColor: '#EDEDED', width: '100%', height: '100%'}}>
           <View style={{backgroundColor: '#2E4053',width: '100%',height: '16%'}} >
        
        <Text style={{color: '#fff',fontSize: 20, marginTop: '12%',marginLeft: '5%',marginBottom: 10}}>
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

        <View style={{

          backgroundColor: '#fff',
          width: '90%',
          marginLeft: '5%',
          borderRadius: '3%',
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
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 20, height: 20,marginLeft: 8,marginTop: 2,marginBottom: 2, borderRadius: 20}} />

          <Text style={{

            color: '#8732C5',
            margin: 10,
            fontSize: '9',
            fontWeight: 'bolder'
                
          }}>
            Anamileth Barreto te está esperando para una clase de Verb to be
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
          borderRadius: '3%',
          marginTop: '4%'

        }}>
          <Text style={{
              fontSize: 6,
              margin: 10,
              color: 'grey',
              
            }}>PROGRESO DEL CURSO</Text>
            <Text style={{

              fontSize: 8,
              marginLeft: 10,
              marginTop: 8,
              marginBottom: 6,
              color: '#1C2833'
            }}>PASO A PASO</Text>
            <View style={{

              width: '40%',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              fontSize: 10,
              marginLeft: 6

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
          <View style={{width: '80%',margin: 16,borderColor: '#EDEDED',borderWidth: 1,borderRadius: '3%'}}>
            <Text style={{color: 'grey',fontSize: 8,margin: 8,marginLeft: 20}}>Ver todas las Unidades</Text>
          </View>
            </View>
        <View style={{width: '90%',marginLeft: 8,marginBottom: 12,borderRadius: '3%',backgroundColor: '#fff', marginTop: 6}}>
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
  </ScrollView>    
         
         
         );
       
     }
  
}
export default Inicio;

const styles = StyleSheet.create({

   options: {

      margin: 10,
      color: 'grey',
      fontSize: 10
      
    }, option: {

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
      margin: 2

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

    },

    contentContainer : {

      paddingVertical: 0

    },

    ScrollView: {

      flex: 1

    }

});
