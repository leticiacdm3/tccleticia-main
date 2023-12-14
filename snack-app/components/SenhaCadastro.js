import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import { useFonts } from 'expo-font';
export default (props) => {

    const [hidePass, setHidePass] = useState(true);
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    });

    if (fontsLoaded) {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
            <Text style={styles.texti}> {props.labelpass} </Text>
                <TextInput
                    paddingTop={9} 
                    paddingLeft={4}
                    placeholderTextColor={'white'}
                    color='white'
                    value={props.value}
                    onChangeText={(text) => props.setSenha(text)}
                    secureTextEntry={hidePass}
                />

            </View>
            <TouchableOpacity style={styles.senhaVisivel} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                    <Icon name='eye' size={18} color='white' />
                    :
                    <Icon name='eye-slash' size={18} color='white' />
                }

            </TouchableOpacity>
        </View>
    );
}}


    const styles = StyleSheet.create({
        container: {
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: '9%',
            marginTop: 20,
            marginBottom: 15
        },
    
        texto: {
            color: 'white',
            flex: 2,
            selectionColor: 'white',
    
        },
        texti:{
            color: 'white',
            fontFamily: 'Montserrat-Regular'
        },
        senhaVisivel: {
            marginLeft: 7,
            paddingTop: 10
        },
    
    })

    
