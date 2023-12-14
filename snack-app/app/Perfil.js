import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { signOutFirebase } from '../connections_leticia/firebase-auth';
import { getPerfilFromUid } from '../connections_leticia/firebase-store';
import {auth} from '../connections_leticia/firebase-auth';

export default function Home() {
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    const trySignOut = async () => {
        signOutFirebase ();
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
        <View style={styles.container}>
            <View style={styles.superior}>
                <TO style={styles.voltar}>
                    <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('entrar')} />
                </TO>
            </View>

            <View style={styles.meio}>
                <ScrollView>
                    <Text>{perfil && perfil.name}</Text>
                    <TO onPress={trySignOut}>
                        <Text style={styles.sair}>SAIR</Text>
                    </TO>
                </ScrollView>
            </View>

        </View>
    );
}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    superior: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#011837',
    },
    meio: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#011837',
    },

    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#011837',
     
    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    topHome:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        paddingLeft: 120,
        color: 'white',
        marginTop: 10
    },
    user:{
        paddingLeft: 70,
        marginTop: 10,
        marginRight: 15
    },
    userr:{
        marginTop: 10
    },
    sair:{
        color: 'white'
    }
});