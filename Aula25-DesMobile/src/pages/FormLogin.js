import { TouchableOpacity, Image, Text, TextInput, View, KeyboardAvoidingView } from "react-native"
import Estilo from "../components/Estilo"
import { useContext, useState } from "react"
import UserContext from "../context/UserContext";
import { useForm, Controller } from "react-hook-form";
import { API_ENDPOINT } from "../config";

export default props => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    const {dispatch, state} = useContext(UserContext);
    const {control, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        //Validações
        console.log(data)

        const URL = API_ENDPOINT + 'login'

        const options = {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(URL, options)
            .then(response =>{
                if(!response.ok){
                    throw new Error('Login e/ou senha incorretos!')
                }
                return response.json();
            })
            .then(dadosRecebidos => {
                console.log('Resposta do servidor: ', dadosRecebidos)

                dispatch({
                    type: 'loginUser',
                    payload: dadosRecebidos[0]
                })
                props.navigation.navigate("GetUsersAPI")
            })
            .catch(error => {
                console.error(error);
            })
    }

    return(
        <KeyboardAvoidingView  style={Estilo.loginContainer}>
            <View style={Estilo.loginContainer}>
                <Image source={require('../assets/logo.png')} style={Estilo.loginImageLogo} />
                <Controller 
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput 
                            style={Estilo.loginTextInputs}
                            placeholder="Digite o login"
                            value={value}
                            onChangeText={ (value) => onChange(value)}
                            onBlur={onBlur}
                        />
                    )}
                    name="valorLogin"
                    defaultValue=""
                    rules={{required: 'Login é obrigatório!'}}
                />
                {errors.valorLogin && <Text style={Estilo.validacaoCampo}>{errors.valorLogin.message}</Text>}

                    
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={Estilo.loginTextInputs}
                            placeholder="Digite a senha"
                            value={value}
                            onChangeText={ (value) => onChange(value) }
                            secureTextEntry={true}
                            onBlur={onBlur}
                        />
                        )
                    }
                    name="valorSenha"
                    rules={{required: 'O valor da senha é obrigatório!'}}
                    defaultValue=""
                />
                {errors.valorSenha && <Text style={Estilo.validacaoCampo}>{errors.valorSenha.message}</Text>}

                <Text style={Estilo.loginForgotPassword}>Esqueceu a senha?</Text>
                <TouchableOpacity 
                    style={Estilo.loginButton}
                    onPress={ 
                        handleSubmit(onSubmit)
                    }
                >
                    <Text style={Estilo.loginButtonText}>LOGIN</Text>    
                </TouchableOpacity>
                <Text style={Estilo.loginForgotPassword}>Criar conta</Text>
            </View>
        </KeyboardAvoidingView>
   
    )
}