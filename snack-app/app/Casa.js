import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Container, Name, Description, Meio, Superior, Inferior, TopHome, User, Userr, BottomTO, BottomIcon } from '../components/estilo/stHome.js'
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import Swiper from 'react-native-swiper';
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
                        <View style={{
                            backgroundColor: '#4C1C83',
                            borderRadius: 20,
                            width: 330,
                            height: 480,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 8,
                                height: 8,
                            },
                            shadowOpacity: 0.33,
                            shadowRadius: 20,
                        }}>
                            <Swiper 
                                showsButtons={true}
                                autoplay={true}
                                autoplayTimeout={10}
                                activeDotColor='#00bf63'
                            >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 25,
                                        fontFamily: 'Montserrat-Regular',
                                        marginBottom: 15,
                                    }}>SANDUÍCHE OLÍMPICO</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-Regular',
                                        marginTop:10,
                                        color: 'white',
                                        marginBottom: 10,
                                    }}>Ingredientes</Text>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                    }}>
                                        <Image source={require('../assets/Imagens/pão.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/queijo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/presunto.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/tomate.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/alface.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/ovo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/maionese.png')} style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-Regular',
                                        marginTop:10,
                                        marginBottom: 15,
                                    }}>Valores Nutricionais</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontFamily: 'Montserrat-Regular',
                                        paddingRight: 100,
                                        marginBottom: 20,
                                    }}>
                                    Calorias: 352 kcal {"\n"}
                                    Gorduras saturadas: 6,44 g {"\n"}
                                    Sódio: 771 mg 
                                    </Text>
                                    <Image source={require('../assets/Imagens/sanduiche.jpg')} 
                                    style={{ 
                                        width: 200, 
                                        height: 140,
                                        borderRadius: 20,
                                    }} />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 25,
                                        fontFamily: 'Montserrat-Regular',
                                        marginBottom: 15,
                                    }}>BOLO DE CHOCOLATE</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-Regular',
                                        marginTop:10,
                                        color: 'white',
                                        marginBottom: 10,
                                    }}>Ingredientes</Text>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                    }}>
                                        <Image source={require('../assets/Imagens/farinha.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/fermento.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/ovob.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/leite.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/óleo.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/chocolate.png')} style={{ width: 40, height: 40 }} />
                                        <Image source={require('../assets/Imagens/açúcar.png')} style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-Regular',
                                        marginTop:10,
                                        marginBottom: 15,
                                    }}>Valores Nutricionais</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontFamily: 'Montserrat-Regular',
                                        paddingRight: 100,
                                        marginBottom: 20,
                                    }}>
                                    Calorias: 235 kcal {"\n"}
                                    Gorduras saturadas: 3,05 g {"\n"}
                                    Sódio: 214 mg
                                    </Text>
                                    <Image source={require('../assets/Imagens/bolo.png')}
                                    style={{ 
                                        width: 200, 
                                        height: 140, 
                                        borderRadius: 20,
                                    }} />
                                    </View>
                            </Swiper>
                        </View>
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

    }
}
