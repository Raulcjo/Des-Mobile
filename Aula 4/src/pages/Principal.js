import { SafeAreaView, Text } from "react-native";
import estilo from "../components/estilo";
import Soma from "../components/Soma";
import Subtracao from "../components/Subtracao";
import Divisao from "../components/Divisao";
import Multiplicacao from "../components/Multiplicacao";
import ComponenteMaluco from "../components/ComponenteMaluco";
import ComponenteMultiplo from "../components/ComponenteMultiplo";
import Botoes from "../components/Botoes";


export default function Principal(){
    return (
        <SafeAreaView style={estilo.margemSuperior}>

            <ComponenteMultiplo />
        
            <Botoes />

            {/*
            <Text style={estilo.textoGrandePrincipal}>Rodando Principal</Text>
            <Soma valor1={1500} valor2={300}></Soma>
            <Soma valor1={55} valor2={78}/>

            <Subtracao valor1="50" valor2={25}/>

            <Divisao valor1={100} valor2={50}/>

            <Multiplicacao valor1={100} valor2={200}/>

            <ComponenteMaluco />
            */}

        </SafeAreaView>
    )
}