
import { app } from "./firebase-app"
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

//Inicializa o módulo de autenticação
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//Função para logar com email e senha
const emailLogin = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            console.log('ERRO:', error)
            return null
        });
    return userCredential
}

//Função para criar usuário com email e senha
const createUser = async (email, pass) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
        .catch((error) => {
            alert("Erro ao criar usuário")
        });
    return userCredential

}
//Função para deslogar
const signOutFirebase = async () => {
    signOut(auth).then(() => {
        console.log("Deslogado");
    }).catch((error) => {
        console.warn(`Error: ${error}`);
    });
}

export {
    app,
    auth,
    emailLogin,
    createUser,
    signOutFirebase
}