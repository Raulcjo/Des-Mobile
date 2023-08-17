import { Text, View } from "react-native";
import Estilo from "../components/Estilo";
//import Itera from "../components/Itera";
//import ComunicacaoDireta from '../components/ComunicacaoDireta'
//import ComponentePai from "../components/ComponentePai";
//import TestaOS from "../components/TestaOS";
//import ParOuImpar from "../components/ParOuImpar";
//import Familia from "../components/Relacao/Familia";
//import Membro from "../components/Relacao/Membro";
import UsuarioLogado from "../components/UsuarioLogado";

export default function Home(){
    return (
        <View style={Estilo.centralizado}>
            {/*<Text style={[Estilo.txtGrande, Estilo.txtVerde]}>Pagina Inicial!</Text> */}

            {/* <Itera num={0} passo={10} /> */}

            {/*<ComunicacaoDireta informed={'Xpto'} />
            <ComponentePai />
            */}

            {/*<TestaOS style={Estilo.txtGrande}/>
            <ParOuImpar numero={9}/>
            */}

            {/*<Familia>
                <Membro nome='Albert' sobrenome='Einstein'/>
                <Membro nome='Isacc' sobrenome='Newton'/>
                <Membro nome='Nikola' sobrenome='Tesla'/>
                <Membro nome='Robert' sobrenome='Oppenheinner'/>
            </Familia> 

            <Familia>
                <Membro nome='Barbie' sobrenome='Girl'/>
                <Membro nome='Ken' sobrenome='Boy'/>
                <Membro nome='Poly' sobrenome='Pocket'/>
            </Familia> 

            <Familia></Familia>
            */}

            <UsuarioLogado usuario={{nome: 'Alex', senha: '123456'}}/>
            <UsuarioLogado usuario={{nome: 'José'}}/>
            <UsuarioLogado usuario={{senha: '1234567'}}/>
            <UsuarioLogado usuario={{}}/>
            <UsuarioLogado />
        </View>
    )
}