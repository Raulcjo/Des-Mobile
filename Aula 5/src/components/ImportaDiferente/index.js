//export default function ImportaDiferente(){}
//export default function(){}
//export default () => {}

import { Text } from "react-native";

export default _ => { // O underline '_' está substituindo o 'props'
    let valorInformado = _.vlrInformado;

    return (
        <>
            <Text>
                {valorInformado}
            </Text>
        </>
    )
}