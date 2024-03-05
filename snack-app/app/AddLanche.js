import React, { useState} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation} from 'expo-router';
import * as imagePicker from 'expo-image-picker';
import { ref} from 'firebase/storage';
import { storage} from "../connections_leticia/firebase-store";
import { addLancheFirestore } from '../connections_leticia/firebase-store';
import { ThemeProvider } from 'styled-components';
import themes from '../components/themes';
import { useColorScheme } from 'react-native';
import { Botao, Container, Icone, Icone2, Input, Meio, Superior, Txt, TxtAddImg } from '../components/estilo/stAddLanche';

export default function AddLanche() {
    const [image, setImage] = useState('https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg')
    const [nomeProduto, setNomeProduto] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    //Função para criar um produto
    const tryCreateProduct = async () => {
        await addLancheFirestore(nomeProduto, valor, descrição, imagem);
        nav.navigate('Cardapio')
    } 

    //Função para pegar a imagem da galeria
    const handleImagePicker = async () => {
        const result = await imagePicker.launchImageLibraryAsync({
            mediaTypes: imagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            await uploadImage(result.assets[0].uri, "image")
        }
    };
    
    //Função para fazer o upload da imagem
    async function uploadImage(uri) {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, "Stuff/" + new Date().getTime());
        setImagem(storageRef.fullPath)
    }

    const nav = useNavigation();
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Superior>
                    <TouchableOpacity >
                        <Icone name={'chevron-left'} size={30} onPress={() => nav.navigate('Cardapio')} />
                    </TouchableOpacity>
                </Superior>
                <Meio>

                    <Txt>Nome do produto</Txt>
                    <Input text={nomeProduto} onChangeText={(text) => setNomeProduto(text)} />

                    <Txt>Valor</Txt>
                    <Input text={valor} onChangeText={(text) => setValor(text)} keyboardType="numeric" />

                    <Botao onPress={handleImagePicker}>
                        <Icone2 name="plus-circle-outline" size={20} marginRight={10}/>
                        <TxtAddImg>ADICIONAR IMAGEM</TxtAddImg>
                    </Botao>
                    <View style={styles.imagem}>
                        <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />
                    </View>
                    <TouchableOpacity style={styles.botaoSave} onPress={tryCreateProduct}>
                        <Text style={{ color: 'white' }}>SALVAR LANCHE</Text>
                    </TouchableOpacity>
                </Meio>
            </Container>
        </ThemeProvider>
    )
}

const styles = StyleSheet.create({
    imagem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoSave: {
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

