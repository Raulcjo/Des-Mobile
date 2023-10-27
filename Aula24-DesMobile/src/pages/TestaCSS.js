import { Animated, View } from "react-native";
import styled from 'style-components/native';
import {Ionicon} from '@'

export default props => {
    const Button = styled.TouchableOpacity`
        backgroud-color: #000;
        padding: 30px 20px;
        border-radius: 50px;
        color: #fff;
        text-aligh: center;
    `;

    const ButtonText = styled.Text`
        color: #fff;
        font-weight: bold;
        font-size: 40px;

    `
    const ButtonCondition = styled.TouchableOpacity`
        background-color: ${(props) => (props.primary ? '#fafafa' : '#ccc')};
        padding: 10px 20px;
        border-radius: 10px;

    `

    const Container = styled.View`
        margin: 20px;
    `

    const StyledIcon = styled(Ionicon)`
        font-size: 60px;
        color: #665;
    `
    const spinValue = useState(new Animated.Value(0))[0];

    let spin = () => {
        spinValue.setValue(0);
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }


    return(
        <>
        <Container>
            <Button
                onPress={() => props.navigation.goBack()}
            >
                <ButtonText>Voltar</ButtonText>
            </Button>

            <ButtonCondition>
                    <ButtonText>Condicional</ButtonText>
            </ButtonCondition>



        </Container>

    </>
    )

}