import { Text } from "react-native";
import Membro from "./Membro";
import Estilo from "../Estilo";

export default props => {
    return (
        <>
            <Text style={[Estilo.txtMedio, Estilo.descola]}>Membros da Família:</Text>
            {props.children}
        </>
    )
}