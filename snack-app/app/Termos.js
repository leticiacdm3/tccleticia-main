import { TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';
import { Container, Voltar, Meio, TextInsta, TextInst } from '../components/estilo/stErmos.js'

export default function Termos() {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'YsabeauSC-Medium': require('../assets/fonts/YsabeauSC-Medium.ttf'),
    });

    if (fontsLoaded) {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Voltar>
                            <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Register')} />
                        </Voltar>
                        <Meio>
                            <TextInsta>ME SIGA NO INSTAGRAM</TextInsta>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL('https://instagram.com/leticiademarcco')
                                }}
                            >
                                <TextInst>@leticiademarcco</TextInst>
                            </TouchableOpacity>
                        </Meio>
                    </Container>
                </ThemeProvider>
            </>
        );
    }
    else {
        return <Splash />
    }
}

