import { useEffect, useState } from "react"
import { ActivityIndicator, Button, FlatList, Text } from "react-native"
import { View } from "react-native"
import Estilo from "../components/Estilo";


export default props => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    //const URL = "https://reactnative.dev/movies.json";
    const URL = "http://10.133.32.170:3000/api/movies";
    //const URL = "http://192.168.15.75:3000/api/movies";

    const getMovies = async () => {
        try{
            const response = await fetch(URL);
            const json = await response.json();
            console.log(json.movies);
            setData(json.movies);
        } catch(error) {
            console.error(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return(
        <>
            <View>
                <Text>Exemplo API</Text>

                {isLoading ? (
                    <ActivityIndicator size={80} />
                ) : (
                    <FlatList 
                        data={data}
                        keyExtractor={({id})=>id}
                        renderItem={ ({item})=>(
                            <Text style={Estilo.textFlatList}>
                                - {item.title} - {item.releaseYear}
                            </Text>
                        )
                        }
                    />
                )
                }
                <Button title="Atualizar" onPress={ () => getMovies()} />
            </View>
        </>
    )
}