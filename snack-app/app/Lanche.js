import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AddLanche from './AddLanche';

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
                    <Text style={styles.topHome}></Text>
                    <TO style={styles.user}>
                        <AntDesign name={'shoppingcart'} size={30} color='white' />
                    </TO>
                    <TO style={styles.userr}>
                        <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')} />
                    </TO>
                </View>

                <View style={styles.meio}>
                    <ScrollView >
                        <AddLanche />
                    </ScrollView>
                </View>

                <View style={styles.inferior}>
                    <TO style={styles.casa} onPress={() => nav.navigate('Casa')}>
                        <SimpleLineIcons name={'home'} size={30} color='black' />
                    </TO>
                    <TO style={styles.menu} onPress={() => nav.navigate('Cardapio')}>
                        <Ionicons name={'fast-food-outline'} size={30} color='black' />
                    </TO>
                    <TO style={styles.dinheiro} onPress={() => nav.navigate('ToDoList')} >
                        <FontAwesome name={'dollar'} size={30} color='black' />
                    </TO>
                </View>

            </View>
        );
    }
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
        backgroundColor: '#00BF63',
        flexDirection: 'row',
    },
    meio: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 80,
    },

    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F4F4F4',

    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    topHome: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        paddingLeft: 85,
        color: 'white',
        marginTop: 10
    },
    user: {
        paddingLeft: 203.4,
        marginTop: 10,
        marginRight: 15
    },
    userr: {
        marginTop: 10
    },

});