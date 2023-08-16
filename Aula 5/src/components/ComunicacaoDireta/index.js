import { Text } from "react-native";
import quaseCSS from '../Estilo'

export default (props) => {
    let valorInfomado = props.informed

    return (
        <>
            <Text style={quaseCSS.txtGrande}>{valorInfomado}</Text>
        </>
    )
}