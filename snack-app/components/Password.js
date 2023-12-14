import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
export default (props) => {

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.icone} >
                <Icon name={props.ipassword} size={20} color='white' />
            </View>
            <View style={styles.texto}>

                <TextInput
                    placeholder={props.labelpass}
                    placeholderTextColor={'white'}
                    color='white'
                    value={props.pass}
                    onChangeText={(text) => props.setSenha(text)}
                    secureTextEntry={hidePass}
                />

            </View>
            <TouchableOpacity style={styles.senhaVisivel} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                    <Icon name='eye' size={20} color='white' />
                    :
                    <Icon name='eye-slash' size={20} color='white' />
                }

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '11%',
        paddingTop: 0,
        paddingBottom: 1,
        marginTop: 20,
    },

    senhaVisivel: {
        marginLeft: 7
    },

    texto: {
        color: 'white',
        paddingBottom: 0,
        paddingLeft: 4,
        paddingTop: 3,
        flex: 2,
        selectionColor: 'white'

    },

})