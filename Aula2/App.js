import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import BotaoGrandeVerde from './src/components/botaoGrandeVerde';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>Cadastre-se</Text>

      <Image source={require('./assets/estrela.png')} style={styles.logoPrincipal}></Image>

      <TextInput 
      placeholder='Insira o login' 
      style={styles.inputLogin}
      keyboardType={'email-address'}
      placeholderTextColor={'white'}
      />
      <TextInput 
      placeholder='Insira a senha' 
      style={styles.inputLogin}
      secureTextEntry={true}
      placeholderTextColor={'white'}
      />

      <BotaoGrandeVerde textoDoBotao={'Acessar'} /> 

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA7E11',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto:{
    color:'white',
    fontSize: 40,
    marginBottom: 10,
  },
  logoPrincipal:{
    height: 200,
    width: 200,
  },
  inputLogin:{
    height: 60,
    width: 300,
    fontSize: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
  }

});