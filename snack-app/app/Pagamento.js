import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Casa from './Casa';

export default function Pagamento() {
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    if (fontsLoaded) {
    return (
        <View style={styles.container}>
            <View style={styles.superior}>
                <TO style={styles.voltar}>
                    <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Casa')} />
                </TO>
                <Text style={styles.topHome}></Text>
                <TO style={styles.user}>
                    <AntDesign name={'shoppingcart'} size={30} color='white'/>
                </TO>
                <TO style={styles.userr}>
                    <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')}/>
                </TO>
            </View>

            <View style={styles.meio}>
                <ScrollView>
                    
                </ScrollView>
            </View>

            <View style={styles.inferior}>
                <TO style={styles.casa} onPress={() => nav.navigate('Casa')}>
                    <SimpleLineIcons name={'home'} size={30} color='white' />
                </TO>
                <TO style={styles.menu} onPress={() => nav.navigate('Cardapio')}>
                    <Ionicons name={'fast-food-outline'} size={30} color='white' />
                </TO>
                <TO style={styles.dinheiro} >
                    <FontAwesome name={'dollar'} size={30} color='white' />
                </TO>
                <TO style={styles.feedback} onPress={() => nav.navigate('Feedback')}>
                    <MaterialCommunityIcons name={'account-heart-outline'} size={30} color='white' />
                </TO>
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
        backgroundColor: '#6D458B',
        flexDirection: 'row'
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
        backgroundColor: '#001127',

    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    topHome:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        paddingLeft: 85,
        color: 'white',
        marginTop: 10
    },
    user:{
        paddingLeft: 203.4,
        marginTop: 10,
        marginRight: 15
    },
    userr:{
        marginTop: 10
    },
});