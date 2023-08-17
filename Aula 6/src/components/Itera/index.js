import {Button, Text} from 'react-native'
import Estilo from '../Estilo'
import { useState } from 'react'

export default props => {
    //[num, passo] = props
    //let numero = props.num
    [numero, setNumero] = useState(props.num)

    //Hooks

    //const step = props.passo
    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    return(
        <>
            <Button title='+' onPress={inc} />
            <Text style={Estilo.txtMedio}>{numero}</Text>
            <Button title='-' onPress={dec} />
        </>
    )
}