import { Text } from "react-native"
import quaseCSS from '../Estilo'

export default (props) =>{
    let valorInformado = props.informed
    
    return(
        <>
            <Text style={quaseCSS.txtGrande}>{valorInformado}</Text>
        </>
    )
}