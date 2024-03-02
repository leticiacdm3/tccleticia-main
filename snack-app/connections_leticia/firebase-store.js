//ARQUIVO PARA ACESSAR O BANCO DE DADOS DO FIREBASE

import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app"
import { getStorage, ref } from "firebase/storage";
import { getDocs } from "firebase/firestore";

export const db = getFirestore(app);
const storage = getStorage(app);

const addUserFirestore = async ( userCredential, name, phone, estado, profile) => {
    const uid = auth.currentUser.uid;
    const data = {
        name: name,
        phone: phone,
        state: estado,
        profile: profile,
        uid: uid,

    }
    console.log(data)
    return await setDoc(doc(db, "usuarios", uid), data);

}

const addLancheFirestore = async (nomeProduto, valor, descrição, imagem) => {
    const data = {
        productName: nomeProduto,
        value: valor,
        description: descrição,
        image: imagem
    }
    console.log(data)
    return await addDoc(collection(db, "produtos"), data);
}

const getPerfilFromUid = async (uid) => {
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}

const getImgLanche = async (uid) => {
    let lanches = []
    const querySnapshot = await getDocs(collection(db, "files"));
    querySnapshot.forEach((doc) => {
        lanches.push(doc.data());
    });
    return lanches
}

const getLanches = async (uid) => {
    let lanches = []
    const querySnapshot = await getDocs(collection(db, "produtos"));
    querySnapshot.forEach((doc) => {
        lanches.push(doc.data());
    });
    return lanches
}


//EXPORTA AS FUNCOES
export { addUserFirestore, getPerfilFromUid, getStorage, getFirestore, storage, addLancheFirestore, getImgLanche, getLanches }

//CRIAR ALUNO, LISTA DE ALUNOS TOCA E VE QNT DEVE AUMENTA OK E ATUALIZA NO BANCO DE DADOS DEIXAR CARDAPIO PRA DEPOIS