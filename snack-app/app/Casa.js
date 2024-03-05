import { StyleSheet, Text, View, TouchableOpacity as TO, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Container, Name, Description, Meio, Superior, Inferior, TopHome, User, Userr, BottomTO, BottomIcon, Vswipe, Vswiper, Tnome, Tnome2, Vimg, Tvalnutri, Tkcal, BotaoClicado } from '../components/estilo/stHome.js'
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import Swiper from 'react-native-swiper';
import Splash from './Splash';

export default function Home(props) {
    const nav = useNavigation();

    //Função para pegar o perfil do usuário
    useEffect(() => {
        if (auth && auth.currentUser) {
            console.log(auth.currentUser)
            nav.navigate('Casa')
        }
    }, [])
    useEffect(() => {
        getPerfilFromUid(auth.currentUser.uid)
            .then((perfil) => {
                setPerfil(perfil);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    //Função para pegar o tema do dispositivo
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    if (fontsLoaded) {
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
                                autoplayTimeout={2}
                                activeDotColor='#fff'
                            >
                                <Vswiper>
                                    <Tnome>SANDUÍCHE OLÍMPICO</Tnome>
                                    <Tnome2>Ingredientes</Tnome2>
                                    <Vimg>
                                        <Image source={require('../assets/Imagens/sand.png')} style={{ width: 250, height: 40 }} />
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
                                        <Image source={require('../assets/Imagens/bol.png')} style={{ width: 250, height: 40 }} />
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
                                        <Image source={require('../assets/Imagens/frutas.png')} style={{ width: 250, height: 40 }} />
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
                                        <Image source={require('../assets/Imagens/past.png')} style={{ width: 250, height: 40 }} />
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
                                        <Image source={require('../assets/Imagens/pizz.png')} style={{ width: 250, height: 40 }} />
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
                            <BotaoClicado name={'home'} size={40} />
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
        return <Splash />
    }


}

