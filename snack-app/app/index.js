import 'react-native-gesture-handler';
import { useEffect} from 'react';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import { useNavigation} from 'expo-router';
import {auth} from '../connections_leticia/firebase-app';
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';
import { Container, Snack, Tela, RegisterButton, RegisterButtonText, EnterButton, EnterButtonText } from '../components/estilo/stIndex.js'

export default function index() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;

  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  useEffect(() => {
    if (auth && auth.currentUser) {
      console.log(auth().currentUser)
      nav.navigate('Casa')
    } 
  }, [])
 

  const entrarClicado = () => {
    
    nav.navigate('entrar')
  }

  if (fontsLoaded) {
    return (
      <>
        <ThemeProvider theme={theme}>
        <Container>

          <Snack>SEJA BEM-VINDO</Snack>
          <Tela>
            <RegisterButton onPress={() => nav.navigate('Register')}>
              <RegisterButtonText>CADASTRAR</RegisterButtonText>
            </RegisterButton>

            <EnterButton onPress={entrarClicado}>
              <EnterButtonText>ENTRAR</EnterButtonText>
            </EnterButton>

          </Tela>
        </Container>
      </ThemeProvider>

      </>

    );
  }
  else {
    return <Splash/>
  }
}