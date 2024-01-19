import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { useEffect, useState } from 'react';
import Field from '../components/Field';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import Password from '../components/Password';
import { useNavigation } from 'expo-router';
import { emailLogin, auth } from "../connections_leticia/firebase-auth";
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native'; 
import { Container, ForgotPassword, ForgotPasswordText, Inferior, NaoPossui, NaoPossuiCadastre, NotYet, LoginForm, LoginButton, ButtonLogin, ButtonLoginText, LoginButtonText } from '../components/estilo/stEntrar';

export default function Entrar() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const tryLogin = async () => {
    console.log(email, pass)
    const userCredential = await emailLogin(email, pass);
    if (userCredential) {

      console.log(userCredential.user);
      nav.navigate('Casa')

    } else {
      alert("Usuário ou senha inválido ");
    }

  }
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  });
  const imgSource = require('../assets/logoescuro.png');

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser)
      nav.navigate('Casa')
    }
  }, [])

  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;

  if (fontsLoaded) {
    return (
      <>
        <ThemeProvider theme={theme}>
        <Container>
          <View>
            <View>
              { deviceTheme === 'dark'
              ?
              <Image style={styles.image} source={imgSource} />
              :
              <Image style={styles.image} source={require('../assets/logoclaro.png')} />
              }
              
            </View>

            <Inferior>
              <LoginForm>
                <Field label='E-MAIL' icon='user' value={email} setText={setEmail} />
                <Password labelpass='SENHA' ipassword='lock' value={pass} setSenha={setPass} />
                { email === "" || pass === "" 
                ? 
                <ButtonLogin
                disabled={true}
                
                > 
                <ButtonLoginText>ENTRAR</ButtonLoginText>
                </ButtonLogin>
                :
                <LoginButton
                  onPress={tryLogin} >
                  <LoginButtonText>ENTRAR</LoginButtonText>
                </LoginButton>
                }
                

                <ForgotPassword>
                  <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                </ForgotPassword>

                <NaoPossui>
                  <NotYet>Ainda não possui conta? </NotYet>
                  <TouchableOpacity onPress={() => nav.navigate('Register')}>
                    <NaoPossuiCadastre>CADASTRE-SE</NaoPossuiCadastre>
                  </TouchableOpacity>
                </NaoPossui>
              </LoginForm>
            </Inferior>
          </View>
        </Container>
        </ThemeProvider>

      </>

    );
  }
  else {
    return <Splash />
  }
}
const styles = StyleSheet.create({

  image: {
    width: 270,
    height: 80,
    resizeMode: 'contain',
    paddingBottom: 300,
    marginTop: 100
  },
  

})
