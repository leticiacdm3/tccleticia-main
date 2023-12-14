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
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                    <ScrollView>
                        <View style={styles.superior}>
                            <TO style={styles.voltar}>
                                <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('index')} />
                            </TO>
                            <Text style={styles.textCadastro}> CADASTRO </Text>
                        </View>
                        <View style={styles.meio}>

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
                        </View>
                        <View style={styles.rodape}>
                            <View style={styles.vTermos}>
                                <CheckBox
                                    style={styles.checkbox}
                                    disabled={false}
                                    value={isChecked}
                                    onValueChange={(setChecked)}
                                />
                                <Text style={styles.tdu}>Li e concordo com os </Text>
                                <TO onPress={() => nav.navigate('Termos')}><Text style={styles.termo}>Termos de Uso</Text></TO>
                            </View>

                            <TO
                                onPress={() => {tryCreateUser();}}
                                style={styles.registerButton}>
                                <Text style={styles.registerButtonText}>
                                    CADASTRAR
                                </Text>
                            </TO>

                        </View>
                        <View style={styles.naoPossui}>
                            <Text style={styles.notYet}> Já possui conta? </Text>
                            <TO onPress={() => nav.navigate('entrar')}>
                                <Text style={styles.naoPossuiCadastre}>ENTRE</Text>
                            </TO>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </>
        );

    }
    else {
        return <Splash />
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6D458B',
    },

    superior: {
        paddingBottom: 30,
        flexDirection: 'row',
        marginTop: 50,

    },
    meio: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        marginRight: 30,
        marginLeft: 30,
        paddingBottom: 80,
        backgroundColor: '#714990'
    },
    rodape: {
        flex: 1,
        marginTop: 50
    },

    registerButton: {
        padding: 4,
        height: 40,
        width: 200,
        backgroundColor: '#00BF63',
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 50
    },
    registerButtonText: {
        fontWeight: '400',
        fontSize: 20,
        color: '#6D458B',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    textCadastro: {
        fontSize: 40,
        color: '#00bf63',
        fontFamily: 'Montserrat-Regular',
        marginTop: 30
    },
    notYet: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Montserrat-Regular'
    },
    naoPossuiCadastre: {
        color: '#00BF63',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular'
    },
    naoPossui: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    tdu: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    },
    termo: {
        color: '#00BF63',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    },
    vTermos: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
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

