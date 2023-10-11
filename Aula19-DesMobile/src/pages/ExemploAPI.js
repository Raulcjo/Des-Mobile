import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Estilo from "../components/Estilo";



export default props => {
    const [isLoding, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const URL = "http://reactnative.dev/movies.json"

    const getMovies = async () => {
        try{
            const response = await fetch(URL);
            const json = await response.json();
            setData(json.movies);
        }
        catch(error) {
            console.error(error);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return (
        <>
            <View>
                <Text>Exemplo API</Text>

                {isLoding ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({id})=>id}
                        renderItem={({item})=>(
                            <Text style={Estilo.textFlatlsit}>
                                {item.title} - {item.releaseYear}
                            </Text>
                        )
                        }
                    />
                )
                }
                <Button title="Atulizar" onPress={() => getMovies()}/>
            </View>
        </>
    )
}