import { StyleSheet, View, Text, TouchableOpacity as TO, ScrollView, KeyboardAvoidingView, } from 'react-native';
import CheckBox from 'expo-checkbox';
import Cadastro from '../components/Cadastro';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import { useNavigation } from 'expo-router';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SenhaCadastro from '../components/SenhaCadastro';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_leticia/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list';
import { addUserFirestore } from '../connections_leticia/firebase-store';
import { Container, Superior, Meio, TextCadastro, Rodape, Vtermos, Tdu, Termo, RegisterButton, RegisterButtonText, NaoPossui, NotYet, NaoPossuiCadastre } from '../components/estilo/stRegister';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'

export default function Register() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    const nav = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passC, setPassC] = useState('');

    const tryCreateUser = async () => {
       if (pass != passC) {
        alert('As senhas não coincidem');
        return;
       }
       const userCredential = await createUser(email, pass);
        if (userCredential) {
            addUserFirestore(userCredential.user.uid, name, cpf, birthDate, phone, email, estado, perfil);
            nav.navigate('Casa')
        } else {
            alert('Erro ao criar usuário');
        }
    }
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    const [estado, setEstado] = useState("");
    const data = [
        { key: '1', value: 'Acre', disabled: true },
        { key: '2', value: 'Alagoas' },
        { key: '3', value: 'Amapá' },
        { key: '4', value: 'Amazonas' },
        { key: '5', value: 'Bahia' },
        { key: '6', value: 'Ceará' },
        { key: '7', value: 'Distrito Federal' },
        { key: '8', value: 'Espírito Santo' },
        { key: '9', value: 'Goiás' },
        { key: '10', value: 'Maranhão' },
        { key: '11', value: 'Mato Grosso' },
        { key: '12', value: 'Mato Grosso do Sul' },
        { key: '13', value: 'Minas Gerais' },
        { key: '14', value: 'Pará' },
        { key: '15', value: 'Paraíba' },
        { key: '16', value: 'Paraná' },
        { key: '17', value: 'Pernambuco' },
        { key: '18', value: 'Piauí' },
        { key: '19', value: 'Rio de Janeiro' },
        { key: '20', value: 'Rio Grande do Norte' },
        { key: '21', value: 'Rio Grande do Sul' },
        { key: '22', value: 'Rondônia' },
        { key: '23', value: 'Roraima' },
        { key: '24', value: 'Santa Catarina' },
        { key: '25', value: 'São Paulo' },
        { key: '26', value: 'Sergipe' },
        { key: '27', value: 'Tocantins' },
    ];
    const [perfil, setPerfil] = useState("");
    const dados = [
        { key: '1', value: 'Gestor do bar' },
        { key: '2', value: 'Aluno' },
        { key: '3', value: 'Responsável' },
        { key: '4', value: 'Professor ou Funcionário' }
    ];

    if (fontsLoaded) {
        return (
            <>
            <ThemeProvider theme={theme}>
                <Container>
                    <ScrollView>
                        <Superior>
                            <TO style={styles.voltar}>
                                <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('index')} />
                            </TO>
                            <TextCadastro> CADASTRO </TextCadastro>
                        </Superior>
                        <Meio>

                            <Cadastro label='Digite seu nome:' text={name} setText={(text) => setName(text)} />
                            <Cadastro label='Digite seu CPF:' text={cpf} setText={(text) => setCpf(text)} />
                            <Cadastro label='Digite sua data de nascimento:' text={birthDate} setText={(text) => setBirthDate(text)} />
                            <Cadastro value={email} setText={setEmail} label='Digite seu e-mail:' />
                            <Cadastro label='Digite seu celular:' text={phone} setText={(text) => setPhone(text)} />
                            <SenhaCadastro value={pass} setSenha={setPass} labelpass='Digite sua senha:' />
                            <SenhaCadastro value={passC} setSenha={setPassC} labelpass='Digite sua senha novamente:' />
                            <SelectList
                                setSelected={(val) => setEstado(val)}
                                data={data}
                                save="key"
                                placeholder='Selecione seu estado:'
                                fontFamily='Montserrat-Regular'
                                dropdownStyles={{
                                    width: 285,
                                    backgroundColor: 'white',
                                    borderColor: 'white',
                                    marginBottom: 20
                                }}
                                boxStyles={{
                                    width: 285,
                                    borderColor: 'white',
                                    marginBottom: 20
                                }}
                                inputStyles={
                                    { color: 'white' }
                                }
                            />
                            <SelectList
                                setSelected={(val) => setPerfil(val)}
                                data={dados}
                                save="value"
                                placeholder='Selecione seu perfil:'
                                fontFamily='Montserrat-Regular'
                                dropdownStyles={{
                                    width: 285,
                                    backgroundColor: 'white',
                                    borderColor: 'white',
                                }}
                                boxStyles={{
                                    width: 285,
                                    borderColor: 'white',
                                }}
                                inputStyles={
                                    { color: 'white' }
                                }
                            />
                        </Meio>
                        <Rodape>
                            <Vtermos>
                                <CheckBox
                                    style={styles.checkbox}
                                    disabled={false}
                                    value={isChecked}
                                    onValueChange={(setChecked)}
                                />
                                <Tdu>Li e concordo com os </Tdu>
                                <TO onPress={() => nav.navigate('Termos')}><Termo>Termos de Uso</Termo></TO>
                            </Vtermos>

                            <RegisterButton
                                onPress={() => {tryCreateUser();}}>
                                <RegisterButtonText>
                                    CADASTRAR
                                </RegisterButtonText>
                            </RegisterButton>

                        </Rodape>
                        <NaoPossui>
                            <NotYet> Já possui conta? </NotYet>
                            <TO onPress={() => nav.navigate('entrar')}>
                                <NaoPossuiCadastre>ENTRE</NaoPossuiCadastre>
                            </TO>
                        </NaoPossui>
                    </ScrollView>
                </Container>
                </ThemeProvider>
            </>
        );

    }
    else {
        return <Splash />
    }

}
const styles = StyleSheet.create({
    checkbox: {
        margin: 8,
    },
    voltar: {
        paddingBottom: 30,
        JustifyContent: 'left',
        marginRight: 40,
        marginLeft: 30,
        height: '100%',
        paddingTop: 40

    }

})

