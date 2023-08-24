import { Text, FlatList} from 'react-native';
import Estilo from '../Estilo';
import produtos from './Produtos';

//Melhor maneira de declarar e navegar por uma lista no 'react-native': 
export default () => {
    function geraLista(){
        return <FlatList //Componente utilizada para visualizar listas como itens
                    data={produtos}
                    renderItem={ 
                        rederizaProduto 
                    }
                    //O 'keyExtractor' extrai a chave daquele registro
                    keyExtractor={ (i) => `${i.id}` }
                />
    }

    const rederizaProduto = ({item: prod}) => {
        return(
            <Text style={Estilo.textoPequeno}>{prod.id} - {prod.nome} - R$ {prod.valor}</Text>
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