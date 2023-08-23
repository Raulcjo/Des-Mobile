import { Text } from 'react-native';
import Estilo from '../Estilo';
import produtos from './Produtos';

export default () => {
    function geraLista(){
        return (
            produtos.map( //O 'map' cria um array e volta cada elemento dentro dele
            (p) => { //'p' é posição do array
                return <Text style={[Estilo.textoPequeno]} key={p.id}>
                    Id: {p.id} - {p.nome} - {p.valor}</Text>
            }
        )
      )
    }

    return (
        <>
            <Text style={[Estilo.textoGrande, Estilo.centraliza]}>Lista de Produtos</Text>
            {
                geraLista()
            }
        </>
    )
}