import { StyleSheet, View, Text, Image } from 'react-native';
export default (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.vImg}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.sweetpoint.com.br/wp-content/uploads/2022/11/Fatia-Brigadeiro-scaled.jpg' }} />
            </View>

            <View style={styles.vTxt}>
                <Text style={styles.textFood}>Bolo de Chocolate</Text>
                <Text style={styles.moneyText}>R$5,00</Text>
            </View>

            <View styles={styles.carrinho}>

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
    },
    vImg: {
        marginTop: 16,
        marginLeft: -120,
        alignSelf: 'left'
    },
    carrinho:{
        
    }

})