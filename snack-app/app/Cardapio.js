import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import Lanchinhos from '../components/Lanchinhos';
import { getLanches, storage, getImgLanche } from '../connections_leticia/firebase-store';

export default function Cardapio() {
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    }); 

    const [lanches, setLanches] = useState([])

    useEffect(() => {
        initial();
    }, []);

    const initial = async () => {
        const l = await getLanches()
        setLanches(l);
    }


    // if (fontsLoaded) {
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
                    <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')} />
                </TO>
                
            </View>

            <View style={styles.meio}>
                <ScrollView style={styles.meinho}>
                <Lanchinhos/>
                {
                    lanches && lanches.map((l, i) => {
                        return (
                            <Lanchinhos key={i} titulo={l.productName} preco={l.value} imagem={l.image}/>
                        )
                    })
                }
                    <TO style={styles.addLanche} onPress={()=> nav.navigate('AddLanche')}>
                        <AntDesign name={'pluscircleo'} size={30} color='white'/>
                        <Text style={styles.addLancheText}> ADICIONAR LANCHES </Text>
                    </TO>
                </ScrollView>
            </View>

            <View style={styles.inferior}>
                <TO style={styles.casa} onPress={() => nav.navigate('Casa')}>
                    <SimpleLineIcons name={'home'} size={30} color='white' />
                </TO>
                <TO style={styles.menu} >
                    <Ionicons name={'fast-food-outline'} size={30} color='white' />
                </TO>
                <TO style={styles.dinheiro} onPress={() => nav.navigate('Pagamento')}>
                    <FontAwesome name={'dollar'} size={30} color='white' />
                </TO>
                <TO style={styles.feedback} onPress={() => nav.navigate('Feedback')}>
                    <MaterialCommunityIcons name={'account-heart-outline'} size={30} color='white' />
                </TO>
            </View>

        </View>
    );
// }

}
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
        marginRight: 15,
        
    },
    userr:{
        marginTop: 10
    },
    addLanche:{
        backgroundColor: '#6D458B',
        width: 250,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 60
    },
    addLancheText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: 'white',
        paddingLeft: 10
    },
    meinho:{
        paddingTop: 20,
    }
    
});