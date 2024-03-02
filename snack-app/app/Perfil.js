import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, Switch, Linking, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { signOutFirebase } from '../connections_leticia/firebase-auth';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import { EventRegister } from 'react-native-event-listeners';
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { Container, Icones, Meio, Row, RowLabel, RowSpacer, RowValue, RowWrapper, SairIcon, Section, SectionHeader, SectionHeaderText, Superior, Titulo, VoltIcon, Voltar, Pjc, PjcText, PjcD } from '../components/estilo/stPerfil';


export default function Home() {
    const [form, setForm] = useState({
        language: 'Português',
    });
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    const nav = useNavigation();
    const [darkMode, setDarkMode] = useState(false);

    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => console.log(`deleted`) }
            ],
            { cancelable: false }
            );
        }

    const SECTIONS = [
        {
            header: 'Preferências',
            items: [
                { id: 'language', icon: 'globe', label: 'Linguagem', type: 'select' },
                { id: 'bug', icon: 'lock', label: 'Alterar Senha', type: 'link' },
                { id: 'changeMail', icon: 'envelope', label: 'Alterar e-mail', type: 'link', },
                { id: 'contact', icon: 'flag', label: 'Reporte um problema', type: 'link', },
                { id: 'save', icon: 'file-o', label: 'Termos de uso', type: 'link' },
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
                            <SairIcon name={'chevron-left'} size={30} onPress={() => nav.navigate('entrar')} />
                        </Voltar>
                        <Titulo>CONFIGURAÇÕES</Titulo>
                    </Superior>

                    <Meio>
                        <ScrollView>
                            <Section>
                                <SectionHeader>
                                    <SectionHeaderText>PREFERÊNCIAS</SectionHeaderText>
                                </SectionHeader>
                                <RowWrapper>
                                    
                                    <TO onPress={()=>{
                                        //handle press
                                    }}>
                                        <Row>
                                        <Icones
                                        name={'globe'}
                                        size={22}
                                        style={{marginRight:12}}
                                        />
                                        <RowLabel>Linguagem</RowLabel>
                                        <RowSpacer/>
                                            <RowValue>Português</RowValue>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>
                                    
                                </RowWrapper>
                                <RowWrapper>
                                <TO onPress={()=>{
                                        nav.navigate('ReplacePass2')
                                    }}>
                                        <Row>
                                        <Icones
                                        name={'lock'}
                                        size={22}
                                        style={{marginRight:12}}
                                        />
                                        <RowLabel>Alterar senha</RowLabel>
                                        <RowSpacer/>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>
                                   
                                </RowWrapper>
                                <RowWrapper>
                                <TO onPress={()=>{
                                        //handle press
                                    }}>
                                        <Row>
                                        <Icones
                                        name={'envelope'}
                                        size={22}
                                        style={{marginRight:12}}
                                        />
                                        <RowLabel>Alterar e-mail</RowLabel>
                                        <RowSpacer/>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>
                                   
                                </RowWrapper>
                                <RowWrapper>
                                <TO onPress={()=>{
                                        //handle press
                                    }}>
                                        <Row>
                                        <Icones
                                        name={'flag'}
                                        size={22}
                                        style={{marginRight:12}}
                                        />
                                        <RowLabel>Reporte um problema</RowLabel>
                                        <RowSpacer/>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>
                                    
                                </RowWrapper>
                                <RowWrapper>
                                <TO onPress={()=>{
                                        nav.navigate('Termos2')
                                    }}>
                                        <Row>
                                        <Icones
                                        name={'file-o'}
                                        size={22}
                                        style={{marginRight:12}}
                                        />
                                        <RowLabel>Termos de uso</RowLabel>
                                        <RowSpacer/>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>
                                </RowWrapper>
                            </Section>

                            <Pjc onPress={trySignOut}>
                                <PjcText>SAIR</PjcText>
                            </Pjc>
                            <PjcD onPress={handleDeletePress}>
                                <PjcText>Deletar conta</PjcText>
                            </PjcD>

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
        backgroundColor: 'white',
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
        backgroundColor: 'white',

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
    rowSpacer: {
        flex: 1
    },
    rowValue: {
        fontSize: 17,
        color: 'white',
        marginRight: 4,
    },
});