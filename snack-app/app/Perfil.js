import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { signOutFirebase } from '../connections_leticia/firebase-auth';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {EventRegister} from 'react-native-event-listeners';
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { Container, Icones, Meio, Row, RowLabel, RowSpacer, RowValue, RowWrapper, SectionHeader, SectionHeaderText, Superior, Titulo, VoltIcon, Voltar } from '../components/estilo/stPerfil';

export default function Home() {
    const [form, setForm] = useState({
        language: 'Português',
    });
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    const nav = useNavigation();
    const [darkMode, setDarkMode] = useState(false);
    const SECTIONS = [
        {
            header: 'Preferências',
            items: [
                { id: 'language', icon: 'globe', label: 'Linguagem', type: 'select' },
                
            ],
        },
        {
            header: 'Ajuda',
            items: [
                { id: 'bug', icon: 'flag', label: 'Reporte um problema', type: 'link' },
                { id: 'contact', icon: 'envelope-o', label: 'Contate-nos', type: 'link' },
            ],
        },
        {
            header: 'Conteúdo',
            items: [
                { id: 'save', icon: 'save', label: 'Salvo', type: 'link' },
                { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
            ],
        },
    ];
    
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    const trySignOut = async () => {
        signOutFirebase();
        nav.navigate('index')
    };
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

    if (fontsLoaded) {
        return (
            <ThemeProvider theme={theme}>
            <Container>
                <Superior>
                    <Voltar>
                        <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('entrar')} />
                    </Voltar>
                    <Titulo>CONFIGURAÇÕES</Titulo>
                </Superior>

                <Meio>
                    <ScrollView>
                        {SECTIONS.map(({ header, items }) => (
                            <View style={styles.section} key={header}>
                                <SectionHeader>
                                    <SectionHeaderText>{header}</SectionHeaderText>
                                </SectionHeader>

                                <View>
                                    {items.map(({ label, id, type, icon }, index) => (
                                        <RowWrapper style={[
                                            index === 0 && { borderTopWidth: 0 },
                                        ]}
                                            key={id}
                                        >
                                            <TO
                                                onPress={() => {
                                                    //handlePress
                                                }}>
                                                <Row>
                                                    <Icones
                                                        name={icon}  
                                                        size={22}
                                                        style={{ marginRight: 12 }}
                                                    />

                                                    <RowLabel>{label}</RowLabel>
                                                    
                                                    <RowSpacer/>
                                                    {type === 'select' && (
                                                        <RowValue>{form[id]}</RowValue>
                                                    )}
                                                    {type === 'toggle' && (
                                                    <Switch
                                                        value={darkMode}
                                                        onValueChange={(value) => {
                                                        setDarkMode(value);
                                                        EventRegister.emit('ChangeTheme', value);
                                                        }}
                                                        
                                                    />  
                                                    )}
                                                    {['select', 'link'].includes(type) && (
                                                        <VoltIcon name="chevron-right" color="white" size={22}/>

                                                    )}
                                                </Row>
                                            </TO>
                                        </RowWrapper>
                                    ))}
                                </View>

                            </View>
                        ))}



                        {/* <Text style={styles.nome}>{perfil && perfil.name}</Text> */}

                    <TO style={{backgroundColor: 'gray', width: 200, height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 50}} onPress={trySignOut}>
                        <Text style={{fontWeight:500, color: 'white', fontSize: 20}}>SAIR</Text>
                    </TO>

                    </ScrollView>
                </Meio>

            </Container>
            </ThemeProvider>
        );
    }
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
        flexDirection: 'row',
        backgroundColor: '#011837',
    },
    meio: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#011837' ,
    },

    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#011837',

    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    topHome: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        paddingLeft: 120,
        color: 'white',
        marginTop: 10
    },
    user: {
        paddingLeft: 70,
        marginTop: 10,
        marginRight: 15
    },
    userr: {
        marginTop: 10
    },
    sair: {
        color: 'white'
    },
    nome: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: 'white',

    },
    titulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 27,
        paddingLeft: 80,
        color: 'white',
        marginTop: 15
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingRight: 260,
        paddingVertical: 8
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#1A375C',
        backgroundColor: '#011D41',
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white'
    },
    rowSpacer:{
        flex: 1
    },
    rowValue: {
        fontSize: 17,
        color: 'white',
        marginRight: 4,
    },
});