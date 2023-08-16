import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Componente1 from '../components/Componente1';
import Componente2 from '../components/Componente2';
import Comp3, { Comp1, Comp2 } from '../components/MultiComponentes';
import OutroComponente from '../components/OutroComponente';
import ComponenteTexto from '../components/ComponenteTexto';
import ImagemPersolnalizada from '../../aula3/src/components/ImagemPersolnalizada';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Texto alterado</Text>

      <Componente1></Componente1>
      <Componente1 />
      <Componente2 />

      <Comp1 />
      <Comp2 />
      <Comp3 />

      <OutroComponente />

      <ComponenteTexto texto={"Texto de texte"}/>
      <ComponenteTexto texto={"Texto diferente"}/>

      <SafeAreaView style={estilo.centraliza}>
      <ImagemPersolnalizada />
      </SafeAreaView>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  cont2: {
    backgroundColor: "red",
    height: 299, 
  }
});
