import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect, useState} from 'react';
import Lanchinhos from '../components/Lanchinhos';
import { getLanches, storage, getImgLanche } from '../connections_leticia/firebase-store';
import { AddLanche, AddLancheText, BottomIcon, Container, Inferior, Meinho, Meio, Superior, User, Userr, Voltar } from '../components/estilo/stCardapio';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function Cardapio() {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    }); 

    const [lanches, setLanches] = useState([])
    
    useEffect(() => {
        initial();
    }, []);

    const initial = async () => {
        const l = await getLanches()
        setLanches(l);
    }

    
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <Superior>
                <Voltar>
                    <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Casa')} />
                </Voltar>

                <User>
                    <AntDesign name={'shoppingcart'} size={30} color='white'/>
                </User>
                <Userr>
                    <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')} />
                </Userr>
                
            </Superior>

            <Meio>
                <Meinho>
                
                {
                    lanches && lanches.map((l, i) => {
                        return (
                            <Lanchinhos key={i} titulo={l.productName} preco={l.value} imagem={l.image}/>
                        )
                    })
                }
                    <AddLanche onPress={()=> nav.navigate('AddLanche')}>
                        <AntDesign name={'pluscircleo'} size={30} color='white'/>
                        <AddLancheText> ADICIONAR LANCHES </AddLancheText>
                    </AddLanche>
                </Meinho>
            </Meio>

            <Inferior>
                <TO style={styles.casa} onPress={() => nav.navigate('Casa')}>
                    <BottomIcon name={'home'} size={30} />
                </TO>
                <TO style={styles.menu} >
                    <BottomIcon name={'food'} size={30} />
                </TO>
                <TO style={styles.dinheiro} onPress={() => nav.navigate('ToDoList')}>
                    <BottomIcon name={'cash'} size={30} />
                </TO>
                
            </Inferior>

        </Container>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    superior: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#00BF63',
        flexDirection: 'row'
    },
    meio: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },

    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F4F4F4',

    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    user:{
        paddingLeft: 275,
        marginTop: 10,
        marginRight: 15,
        
    },
    userr:{
        marginTop: 10
    },
    addLanche:{
        backgroundColor: '#00BF63',
        width: 250,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 60
    },
    addLancheText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: 'white',
        paddingLeft: 10
    },
    meinho:{
        paddingTop: 20,
    }
    
});