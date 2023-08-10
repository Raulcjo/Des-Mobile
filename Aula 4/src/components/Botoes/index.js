import { Button } from "react-native";


export default () => {
    function funcaoJS(){
        console.warn("Clicou no botão #1")
    } 


    return (
        <>
            <Button
            title="Botão #1"
            onPress={funcaoJS}
            />

            <Button
            title="Botão #2"
            onPress={function(){console.warn("Clicou no botão #2")}}
            />

            <Button
            title="Botão #3"
            onPress={()=>{console.warn("Clicou no botão #3")}}
            />

        </>

    )
}