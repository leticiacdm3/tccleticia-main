import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../connections_leticia/firebase-auth';
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { Container, FormInput, FormTitle, SendButton, SendButtonText, SubContainer, Textcc } from '../components/estilo/stReplacePass';

export default function ReplacePass2() {
    const [userMail, setUserMail] = useState('');
    const nav = useNavigation();
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    //Função para enviar o email de redefinição de senha
    const replacePass = async () => {
        if (userMail !== '') {
            sendPasswordResetEmail(auth, userMail)
                .then(() => {
                    alert("Foi enviado um email para:" + userMail + "com as instruções para redefinir a senha")
                    nav.navigate('entrar')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert("Ops! Alguma coisa deu errado: " + errorMessage + "Tente novamente ou pressione 'Voltar' para retornar à tela de login")
                    return;
                })
        } else {
            alert("Digite um e-mail válido")
            return;
        }
    }

    return (
        <ThemeProvider theme={theme}>
        <Container>
            <FormTitle>Redefinição de Senha</FormTitle>
            <FormInput
                placeholder='Digite seu e-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={userMail}
                onChangeText={setUserMail}
                placeholderTextColor={'gray'}
                color={'white'}
            />
            <SendButton
                onPress={replacePass}
            >
                <SendButtonText>Enviar</SendButtonText>
            </SendButton>
            <SubContainer>
                <TouchableOpacity
                    onPress={() => nav.navigate('Perfil')}
                >
                    <Textcc>Voltar</Textcc>
                </TouchableOpacity>
            </SubContainer>
        </Container>
        </ThemeProvider>
    )
}

