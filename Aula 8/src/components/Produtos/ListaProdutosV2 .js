import { Text } from 'react-native';
import Estilo from '../Estilo';
import produtos from './Produtos'

export default () => {//Maneira mais simple de declarar geraLista
    const geraLista = () => produtos.map((p) => <Text style={[Estilo.textoPequeno]} key={p.id}>Id: {p.id} - {p.nome} - {p.valor}</Text>)

    return (
        <>
            <Text style={[Estilo.textoGrande, Estilo.centraliza]}>Lista de Produtos</Text>
            {
                geraLista(produtos)
            }
        </>
    )
}