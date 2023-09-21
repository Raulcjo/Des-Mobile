import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    containerCentralized:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center", 
    },
    textMedium:{
        fontSize: 35,
        fontWeight: "bold",
    },
    loginContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#003f5c",
    },
    loginTextInput:{
        backgroundColor: "#fff",
        width: 300,
        height: 55,
        marginTop: 30,
        fontSize: 15,
        borderRadius: 30,
        padding: 10,
        color: "#000814"
    },
    loginForgotPassword:{
        color: "#fff",
        marginTop: 25,
        marginBottom: 25,
    },
    loginButton:{
        width: 300,
        height: 55,
        backgroundColor: "#0c1821",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    loginButtonText:{
        color: "#fff",
        fontSize: 15,
    },
    loginImageLogo:{
        height: 100,
        width: 300,
        marginBottom: 20,
    },
    loginIcon:{
        marginTop: 25,
    },
    formContainer:{
        marginLeft: 10,
        marginRight: 10
    },
    formInputDescription:{
        fontSize: 22,
    },
    formInput:{
        fontSize: 22,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: '#DCDCDC',
        marginBottom: 10,
    },
    formButtonSubmit: {
        backgroundColor: '#0000'
    }

}) 