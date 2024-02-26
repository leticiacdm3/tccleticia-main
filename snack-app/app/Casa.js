import { StyleSheet, Text, View, TouchableOpacity as TO, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Container, Name, Description, Meio, Superior, Inferior, TopHome, User, Userr, BottomTO, BottomIcon, Vswipe, Vswiper, Tnome, Tnome2, Vimg, Tvalnutri, Tkcal } from '../components/estilo/stHome.js'
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import Swiper from 'react-native-swiper';
import { Splash } from './Splash';

export default function Home() {
    const nav = useNavigation();
    const [perfil, setPerfil] = useState('');

    useEffect(() => {
        getPerfilFromUid(auth.currentUser.uid)
            .then((perfil) => {
                setPerfil(perfil);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const deviceTheme = useColorScheme();

    const theme = themes[deviceTheme] || theme.dark;

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });
    const [imgLoaded] = useState({
        'queijo': require('../assets/Imagens/queijo.png'),
        'presunto': require('../assets/Imagens/presunto.png'),
        'tomate': require('../assets/Imagens/tomate.png'),
        'alface': require('../assets/Imagens/alface.png'),
        'ovo': require('../assets/Imagens/ovo.png'),
        'maionese': require('../assets/Imagens/maionese.png'),
        'farinha': require('../assets/Imagens/farinha.png'),
        'ovob': require('../assets/Imagens/ovob.png'),
        'leite': require('../assets/Imagens/leite.png'),
        'óleo': require('../assets/Imagens/óleo.png'),
        'chocolate': require('../assets/Imagens/chocolate.png'),
        'açúcar': require('../assets/Imagens/açúcar.png'),
        'melancia': require('../assets/Imagens/melancia.png'),
        'morango': require('../assets/Imagens/morango.png'),
        'banana': require('../assets/Imagens/banana.png'),
        'maçã': require('../assets/Imagens/maçã.png'),
        'mamão': require('../assets/Imagens/mamão.png'),
        'mel': require('../assets/Imagens/mel.png'),
        'sanduiche': require('../assets/Imagens/sanduiche.jpg'),
        'bolo': require('../assets/Imagens/bolo.png'),
        'salada': require('../assets/Imagens/salada.jpg'),
    })
    if (fontsLoaded && imgLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Superior>
                        <TopHome>Home</TopHome>
                        <User>
                            <AntDesign name={'shoppingcart'} size={30} color='white' />
                        </User>
                        <Userr onPress={() => nav.navigate('Perfil')}>
                            <Icon name={'user'} size={25} color='white' />
                        </Userr>
                    </Superior>

                    <Meio>
                        <Vswipe>
                            <Swiper
                                showsButtons={true}
                                autoplay={true}
                                autoplayTimeout={10}
                                activeDotColor='#fff'
                            >
                                <Vswiper>
                                    <Tnome>SANDUÍCHE OLÍMPICO</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/queijo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/presunto.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/tomate.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/alface.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/ovo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/maionese.png')} style={{ width: 40, height: 40 }} />
                                    </Vimg>
                                    <Tvalnutri>Valores Nutricionais</Tvalnutri>
                                    <Tkcal>
                                        Calorias: 352 kcal {"\n"}
                                        Gorduras saturadas: 6,44 g {"\n"}
                                        Sódio: 771 mg
                                    </Tkcal>
                                    <Image source={require('../assets/Imagens/sanduiche.jpg')}
                                        style={{
                                            width: 200,
                                            height: 140,
                                            borderRadius: 20,
                                        }} />
                                </Vswiper>
                                <Vswiper>
                                    <Tnome>BOLO DE CHOCOLATE</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/farinha.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/ovob.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/leite.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/óleo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/chocolate.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/açúcar.png')} style={{ width: 40, height: 40 }} />
                                    </Vimg>
                                    <Tvalnutri>Valores Nutricionais</Tvalnutri>
                                    <Tkcal>
                                        Calorias: 235 kcal {"\n"}
                                        Gorduras saturadas: 3,05 g {"\n"}
                                        Sódio: 214 mg
                                    </Tkcal>
                                    <Image source={require('../assets/Imagens/bolo.png')}
                                        style={{
                                            width: 200,
                                            height: 140,
                                            borderRadius: 20,
                                        }} />
                                </Vswiper>
                                <Vswiper>
                                    <Tnome>SALADA DE FRUTAS</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/melancia.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/morango.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/banana.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/maçã.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/mamão.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/mel.png')} style={{ width: 40, height: 40 }} />
                                    </Vimg>
                                    <Tvalnutri>Valores Nutricionais</Tvalnutri>
                                    <Tkcal>
                                        Calorias: 120 kcal {"\n"}
                                        Gorduras saturadas: 0,3 g {"\n"}
                                        Sódio: 0 mg
                                    </Tkcal>
                                    <Image source={require('../assets/Imagens/salada.jpg')}
                                        style={{
                                            width: 200,
                                            height: 140,
                                            borderRadius: 20,
                                        }} />
                                </Vswiper>
                                <Vswiper>
                                    <Tnome>PASTEL DE CARNE</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/massa.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/carne.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/cebola.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/tomate.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/ovo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/óleo.png')} style={{ width: 40, height: 40 }} />
                                    </Vimg>
                                    <Tvalnutri>Valores Nutricionais</Tvalnutri>
                                    <Tkcal>
                                        Calorias: 250 kcal {"\n"}
                                        Gorduras saturadas: 4,5 g {"\n"}
                                        Sódio: 400 mg
                                    </Tkcal>
                                    <Image source={require('../assets/Imagens/pastel.png')}
                                        style={{
                                            width: 200,
                                            height: 140,
                                            borderRadius: 20,
                                        }} />
                                </Vswiper>
                                <Vswiper>
                                    <Tnome>PIZZA DE CALABRESA</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/massa.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/molho.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/queijo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/calabresa.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/cebola.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/orégano.png')} style={{ width: 40, height: 40 }} />
                                    </Vimg>
                                    <Tvalnutri>Valores Nutricionais</Tvalnutri>
                                    <Tkcal>
                                        Calorias: 300 kcal {"\n"}
                                        Gorduras saturadas: 5,5 g {"\n"}
                                        Sódio: 600 mg
                                    </Tkcal>
                                    <Image source={require('../assets/Imagens/pizza.png')}
                                        style={{
                                            width: 200,
                                            height: 140,
                                            borderRadius: 20,
                                        }} />
                                </Vswiper>

                            </Swiper>
                        </Vswipe>
                    </Meio>

                    <Inferior>
                        <TO>
                            <BottomIcon name={'home'} size={35} />
                        </TO>
                        <TO onPress={() => nav.navigate('Cardapio')}>
                            <BottomIcon name={'food'} size={30} />
                        </TO>
                        <TO onPress={() => nav.navigate('ToDoList')}>
                            <BottomIcon name={'cash'} size={35} />
                        </TO>
                    </Inferior>

                </Container>
            </ThemeProvider>
        );
    } else {
        return
        <Splash />
    }


}

