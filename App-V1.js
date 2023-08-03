import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import BotaoGrandeVerde from './src/components/botaoGrandeVerde';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>Hello Word!</Text>
      <Text style={styles.secundario}>Usando expo-cli!</Text>
      <Text>Terceiro</Text>
      <TouchableOpacity style={styles.botaoPrincipal}>
        <View>
        <Text style={styles.textoBotao}>Text de botao</Text> 
        </View>     
      </TouchableOpacity>

      <BotaoGrandeVerde textoDoBotao={'Primeiro Botão'} /> 
      <BotaoGrandeVerde textoDoBotao={'Segundo Botão'}/> 
      <BotaoGrandeVerde textoDoBotao={'Terceiro Botão'}/>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto:{
    color:'red',
    fontSize: 40,
  },
  secundario:{
    color:'green',
    fontSize: 20,
  },
  botaoPrincipal:{
    backgroundColor:'blue',
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    color:'white',
    fontWeight: 'bold'
   },


});