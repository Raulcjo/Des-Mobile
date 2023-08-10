import React, { Fragment } from "react";
import { Text, View } from "react-native";
import estilo from "../estilo";

export default () => {
    return (
        <Fragment>
            <Text style={estilo.textoGrandePrincipal}>Título Principal</Text>
            <Text>Texto secundário</Text>
        </Fragment>
    )
}