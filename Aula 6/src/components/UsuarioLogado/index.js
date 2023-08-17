import { Text } from "react-native";
import Estilo from "../Estilo";
import Se from "../Se";

export default props => {
    const usuario = props.usuario || {};

    return (
        <>
            <Se teste={usuario && usuario.nome && usuario.senha}>
                <Text style={Estilo.txtMedio}>Usuário Logado:</Text>
                <Text style={Estilo.txtPequeno}>{usuario.nome} | {usuario.senha}</Text>
            </Se>

        </>
    )
}