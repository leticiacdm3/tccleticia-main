import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default (props) => {
    
    const titulo = props.titulo || 'Sem título';
    const preco = props.preco || 'Sem preço';

    return (
        <View style={styles.container}>
            <View style={styles.vImg}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.sweetpoint.com.br/wp-content/uploads/2022/11/Fatia-Brigadeiro-scaled.jpg' }} />
            </View> 

            <View style={styles.vTxt}>
                <Text style={styles.textFood}>{titulo}</Text>
                <Text style={styles.moneyText}>{preco}</Text>
                
            </View>

            <View style={styles.carrinho}>
                <TouchableOpacity>
                <FontAwesome5 name={'trash-alt'} size={25} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D458B',
        width: 380,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    textFood: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    moneyText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        marginTop: 15
    },
    vTxt: {
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 70,
    },
    vImg: {
        marginTop: 16,
        alignSelf: 'left'
    },
    carrinho:{
        alignSelf: 'center',
        
        
    }

})