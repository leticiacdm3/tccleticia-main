import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../connections_leticia/firebase-auth';


export default function ReplacePass() {
    const [userMail, setUserMail] = useState('');
    const nav = useNavigation();

    const replacePass = async () => {
        if (userMail !== '') {
            sendPasswordResetEmail(auth, userMail)
                .then(() => {
                    alert("Foi enviado um email para:" + userMail + "com as instruções para redefinir a senha")
                    nav.navigate('entrar')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert("Ops! Alguma coisa deu errado: " + errorMessage + "Tente novamente ou pressione 'Voltar' para retornar à tela de login")
                    return;
                })
        } else {
            alert("Digite um e-mail válido")
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Redefinição de Senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Digite seu e-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={userMail}
                onChangeText={setUserMail}
                placeholderTextColor={'black'}
            />
            <TouchableOpacity
                style={styles.sendButton}
                onPress={replacePass}
            >
                <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    onPress={() => nav.navigate('entrar')}
                >
                    <Text style={{color: 'black'}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    formTitle: {
        fontSize: 24,
        color: 'black',
        marginBottom: 20
    },
    formInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    sendButton: {
        width: '80%',
        height: 40,
        backgroundColor: '#007F1E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    sendButtonText: {
        fontSize: 16,
        color: '#fff'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20
    }

})
