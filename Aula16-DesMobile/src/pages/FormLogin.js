import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import Estilo from "../components/Estilo";
import { useState, useContext } from "react";
import { Octicons } from '@expo/vector-icons'; 
import UserContext from "../context/UserContext";


export default props => {
    
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    const {state} = useContext(UserContext)

    return(
        <KeyboardAvoidingView style={Estilo.loginContainer}> 
            <View style={Estilo.loginContainer}>
                <Image source={require('../assets/Infobar-logo.png')} style={Estilo.loginImageLogo}/>
                <Octicons name="feed-person" size={50} color="#fff" style={Estilo.loginIcon}/>
                <TextInput 
                    placeholder="Digite o login" 
                    style={Estilo.loginTextInput} 
                    value={valorLogin}
                    onChangeText={(valorLogin) => setValorLogin(valorLogin)}
                />
                <TextInput 
                    placeholder="Digite a senha" 
                    style={Estilo.loginTextInput} 
                    value={valorSenha}
                    onChangeText={(valorSenha) => setValorSenha(valorSenha)}
                    secureTextEntry={true}
                />

                <Text style={Estilo.loginForgotPassword}>Esqueceu a senha?</Text>

                <TouchableOpacity style={Estilo.loginButton} 
                onPress={() => {
                    const userLogado = state.Users.filter(U => U.login === valorLogin)[0]
                    if(userLogado){
                        userLogado.password == valorSenha ? props.navigation.navigate("UserList") : console.warn("Usuário e/ou Senha incorreta!")
                    }
                    else{
                        console.warn("Usuário e/ou Senha incorreta!")
                    }
                }}
                >
                    <Text style={Estilo.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={Estilo.loginForgotPassword}>Criar conta</Text>
            </View>
        </KeyboardAvoidingView>
    )
}