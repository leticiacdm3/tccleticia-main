import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as imagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { storage, db, getStorage } from "../connections_leticia/firebase-store";
import { addLancheFirestore } from '../connections_leticia/firebase-store';

export default function AddLanche() {
    const [image, setImage] = useState('https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg')
    const [url, setUrl] = useState("");

    const [nomeProduto, setNomeProduto] = useState('');
    const [valor, setValor] = useState('');
    const [descrição, setDescrição] = useState('');
    const [imagem, setImagem] = useState('');

    const tryCreateProduct = async () => {
        addLancheFirestore(nomeProduto, valor, descrição, imagem);
    }

    const handleImagePicker = async () => {
        console.log('a')
        const result = await imagePicker.launchImageLibraryAsync({
            mediaTypes: imagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log('b')
            setImage(result.assets[0].uri);
            console.log('c')
            await uploadImage(result.assets[0].uri, "image")
        }
    };
    async function uploadImage(uri, fileType) {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, "Stuff/" + new Date().getTime());
        setImagem(storageRef.fullPath)

        const uploadTask = await uploadBytesResumable(storageRef, blob);
        
        
        // uploadTask.on(
        //     async () => {
        //         console.log('6')
        //         await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        //             console.log("Arquivo disponível em", downloadURL);
        //             await saveRecord(fileType, downloadURL, new Date().toISOString());
        //             setImage("");
        //         });
        //     }
        // );
        console.log('7',storageRef.fullPath)

    }

    async function saveRecord(fileType, url, createdAt) {
        try {
            const docRef = await addDoc(collection(db, "files"), {
                fileType,
                url,
                createdAt,
            });
            console.log("document saved correctly", docRef.id);
        } catch (e) {
            console.log(e);
        }
    }
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.superior}>
                <TouchableOpacity >
                    <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Cardapio')} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.meio}>

                <Text style={styles.txt}>Nome do produto</Text>
                <TextInput style={styles.input} text={nomeProduto} onChangeText={(text) => setNomeProduto(text)}/>

                <Text style={styles.txt}>Valor</Text>
                <TextInput style={styles.input} text={valor} onChangeText={(text) => setValor(text)}/>

                <Text style={styles.txt}>Descrição</Text>
                <TextInput style={styles.input} text={descrição} onChangeText={(text) => setDescrição(text)}/>

                <TouchableOpacity style={styles.botao} onPress={handleImagePicker}>
                    <AntDesign name="pluscircleo" size={20} marginRight={10} />
                    <Text style={styles.txtAddImg}>ADICIONAR IMAGEM</Text>
                </TouchableOpacity>
                <View style={styles.imagem}>
                    <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />
                </View>
                <TouchableOpacity style={styles.botaoSave} onPress={tryCreateProduct}>
                    <Text style={{color:'white'}}>SALVAR LANCHE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#011837'
    },

    input: {
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: 300,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 8,
        marginBottom: 5,
        marginLeft: 55
    },
    meio: {
        flex: 2,
        width: '100%',
        height: '100%',
    },

    botImg: {
        width: '70%',
        backgroundColor: 'white',
        height: 80,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    superior: {
        flex: 0.1,
        paddingBottom: 30,
        marginRight: 50,
        alignSelf: 'left',
        paddingTop: 30,
        width: '100%',
        height: '100%',
        paddingLeft: 10
    },
    botao: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBDBDB',
        width: 200,
        height: 30,
        flexDirection: 'row',
        borderRadius: 10
    },
    avatar: {
        width: 200,
        height: 200,

    },
    imagem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoSave:{
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007F1E',
        width: 150,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10
    },
    }

)

