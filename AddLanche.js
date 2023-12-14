import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState, useEfect} from 'react';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNFetchBlob from  'react-native-fetch-blob';

export default function AddLanche() {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.superior}>
            <TouchableOpacity >
                    <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Cardapio')} />
                </TouchableOpacity>
            <Text>superior</Text>
            </View>
            <View style={styles.meio}>
                <Text style={styles.txt}>Nome do produto</Text>
                <TextInput style={styles.input} />

                <Text style={styles.txt}>Valor</Text>
                <TextInput style={styles.input} />

                <Text style={styles.txt}>Descriçao</Text>
                <TextInput style={styles.input} />

                <TouchableOpacity style={styles.botImg}>
                    <AntDesign name="pluscircleo" size={30} marginRight={20} marginLeft={-20} />
                    <Text style={styles.textoBotao}>ADICIONAR IMAGEM</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                <AntDesign name="checkcircle" size={40} color="green" />
                </TouchableOpacity>
            </View>
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

    input:{
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: 300,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    txt:{
        color: '#fff',
        fontSize: 20,
        paddingLeft: 8,
        marginBottom: 5,
        marginLeft: 55
    },
    meio:{
        flex: 2,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },

    botImg:{
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
    textoBotao:{
        fontSize: 20
    },
    botao:{
        alignSelf: 'center',
        marginTop: 30
    }

})