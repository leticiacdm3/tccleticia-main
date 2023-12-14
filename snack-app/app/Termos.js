import { View, TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import Splash from './Splash';

export default function Termos() {
    
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'YsabeauSC-Medium': require('../assets/fonts/YsabeauSC-Medium.ttf'),
    });

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.voltar}>
                    <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Register')} />
                </TouchableOpacity>
                <View style={styles.meio}>
                    <Text style={styles.textInsta}>ME SIGA NO INSTAGRAM</Text>
                    <TouchableOpacity
                    onPress={()=> {
                        Linking.openURL('https://instagram.com/leticiademarcco')
                    }}
                    >
                        <Text style={styles.textInst} >@leticiademarcco</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    else {
        return <Splash />
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6d458b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    voltar: {
        paddingBottom: 30,
        marginRight: 50,
        marginLeft: 30,
        alignSelf: 'left',
        flex: 1,
        paddingTop: 90,

    },
    meio: {
        flex: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 180,
    },
    textInsta: {
        color: 'white',
        fontFamily: 'YsabeauSC-Medium'
    },
    textInst: {
        color: 'white',
        fontFamily: 'YsabeauSC-Medium',
        fontSize: 30
    }

})