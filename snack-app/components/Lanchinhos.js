import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import themes from './themes';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Carrinho, Container, MoneyText, TextFood, Vimg, Vtxt } from './estilo/stLanchinhos';

export default (props) => {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => console.log(`deleted`) }
            ],
            { cancelable: false }
            );
        }

    const titulo = props.titulo || 'Sem título';
    const preco = props.preco || 'Sem preço';
    const imagem = 'https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg';
    
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <Vimg>
                <Image
                    style={styles.img}
                    source={{uri:imagem}} />
            </Vimg> 

            <Vtxt>
                <TextFood>{titulo}</TextFood>
                <MoneyText>R${preco}</MoneyText>
                
            </Vtxt>

            <Carrinho>
                <TouchableOpacity onPress={handleDeletePress}>
                <FontAwesome5 name={'trash-alt'} size={25} color='white' />
                </TouchableOpacity>
            </Carrinho>
        </Container>
        </ThemeProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00BF63',
        width: 380,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    textFood: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    moneyText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        marginTop: 15
    },
    vTxt: {
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 70,
    },
    vImg: {
        marginTop: 16,
        alignSelf: 'left'
    },
    carrinho:{
        alignSelf: 'center',
        
        
    }

})