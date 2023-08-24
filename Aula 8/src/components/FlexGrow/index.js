import { View, StyleSheet } from "react-native"


export default props => {
    return (
        <View style={est.container}>
            <View style={est.v0}></View>
            <View style={est.v1}></View>
            <View style={est.v2}></View>
        </View>
    )
}

const est = StyleSheet.create({
    container:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },
    v0:{
        backgroundColor: 'green',
        height: 500,
    },
    v1:{
        backgroundColor: 'red',
        flexGrow: 1,
    },
    v2:{
        backgroundColor: 'orange',
        flexGrow: 1,
    }
})