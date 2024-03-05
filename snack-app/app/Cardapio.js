import {TouchableOpacity as TO,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import Lanchinhos from '../components/Lanchinhos';
import { getLanches} from '../connections_leticia/firebase-store';
import { AddLanche, AddLancheText, BotaoClicado, BottomIcon, Container, Inferior, Meinho, Meio, Superior, User, Userr, Voltar } from '../components/estilo/stCardapio';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Splash from './Splash';
import { RefreshControl } from 'react-native';
import React from 'react';

export default function Cardapio() {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    const [lanches, setLanches] = useState([])

    //Iniciar a lista de lanches
    useEffect(() => {
        initial();
    }, []);

    const initial = async () => {
        const l = await getLanches()
        setLanches(l);
    }
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    if (fontsLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Superior>
                        <Voltar>
                            <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Casa')} />
                        </Voltar>

                        <User>
                            <AntDesign name={'shoppingcart'} size={30} color='white' />
                        </User>
                        <Userr>
                            <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')} />
                        </Userr>

                    </Superior>

                    <Meio>
                        <Meinho
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }>

                            {
                                lanches && lanches.map((l, i) => {
                                    return (
                                        <Lanchinhos key={i} titulo={l.productName} preco={l.value} imagem={l.image} />
                                    )
                                })
                            }
                            <AddLanche onPress={() => nav.navigate('AddLanche')}>
                                <AntDesign name={'pluscircleo'} size={30} color='white' />
                                <AddLancheText> ADICIONAR LANCHES </AddLancheText>
                            </AddLanche>
                        </Meinho>
                    </Meio>

                    <Inferior>
                        <TO onPress={() => nav.navigate('Casa')}>
                            <BottomIcon name={'home'} size={35} />
                        </TO>
                        <TO  >
                            <BotaoClicado name={'food'} size={35} />
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

