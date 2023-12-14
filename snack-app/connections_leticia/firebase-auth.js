
import {app} from "./firebase-app"
//import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import { addUserFirestore } from "./firebase-store";

//MANTÉM A SESSAO MESMO APÓS FECHAR E ABRIR O APP
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


const emailLogin = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch(error => { 
            console.log('ERRO:',error)
            return null
        });
    return userCredential
}


const createUser = async (email, pass, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
        .catch((error) => {
            alert("Erro ao criar usuário")
        });
        return userCredential
    //CHAMA FUNCAO EM firebase-store
    //addUserFirestore(userCredential, "Leticia Pedrinho", "123.456.789-00","53 9991730000", "27/07/1996")

    // updateProfile(userCredential.user, {
    //     displayName: name
    // }).then(() => {
    //     console.log("Feitorias")
    // }).catch((error) => {
    //     console.warn("Deu ruim")
    //     console.warn(error)
    // });

}

const signOutFirebase = async () => {
    signOut(auth).then(() => {
        console.log("Deslogado");
    }).catch((error) => {
        console.warn(`Error: ${error}`);
    });
}

//EXPORTA O OBJETI DO APP (DESNECESSARIAMENTE, NA VERDADE), O DE AUTENTICACAO E AS TRES FUNCOES CRIADAS
export { app, 
    auth, 
    emailLogin, 
    createUser, 
    signOutFirebase }