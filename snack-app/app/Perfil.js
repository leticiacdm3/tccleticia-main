import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { signOutFirebase } from '../connections_leticia/firebase-auth';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import { auth } from '../connections_leticia/firebase-auth';
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { Container, Icones, Meio, Row, RowLabel, RowSpacer, RowValue, RowWrapper, SairIcon, Section, SectionHeader, SectionHeaderText, Superior, Titulo, VoltIcon, Voltar, Pjc, PjcText, PjcD } from '../components/estilo/stPerfil';


export default function Home() {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    const nav = useNavigation();

    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja deletar sua conta? Esta ação é irreversível.",
            [
                {
                    text: "Não",
                    onPress: () => Alert.alert("Isso aí"),
                    style: "cancel"
                },
                { text: "Sim", onPress: () => Alert.alert('Pois não vai.') }
            ],
            { cancelable: false }
        );
    }

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    //Função para deslogar
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

                                    <TO onPress={() => {
                                        Alert.alert('Sim, você só pode falar português por enquanto.')
                                    }}>
                                        <Row>
                                            <Icones
                                                name={'globe'}
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RowLabel>Linguagem</RowLabel>
                                            <RowSpacer />
                                            <RowValue>Português</RowValue>
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>

                                </RowWrapper>
                                <RowWrapper>
                                    <TO onPress={() => {
                                        nav.navigate('ReplacePass2')
                                    }}>
                                        <Row>
                                            <Icones
                                                name={'lock'}
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RowLabel>Alterar senha</RowLabel>
                                            <RowSpacer />
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>

                                </RowWrapper>
                                <RowWrapper>
                                    <TO onPress={() => {
                                        Alert.alert('Aplicações futuras!')
                                    }}>
                                        <Row>
                                            <Icones
                                                name={'envelope'}
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RowLabel>Alterar e-mail</RowLabel>
                                            <RowSpacer />
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>

                                </RowWrapper>
                                <RowWrapper>
                                    <TO onPress={() => {
                                        Alert.alert('Meu app não possui problemas.')
                                    }}>
                                        <Row>
                                            <Icones
                                                name={'flag'}
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RowLabel>Reporte um problema</RowLabel>
                                            <RowSpacer />
                                            <VoltIcon name="chevron-right" size={20} />
                                        </Row>
                                    </TO>

                                </RowWrapper>
                                <RowWrapper>
                                    <TO onPress={() => {
                                        nav.navigate('Termos2')
                                    }}>
                                        <Row>
                                            <Icones
                                                name={'file-o'}
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RowLabel>Termos de uso</RowLabel>
                                            <RowSpacer />
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
