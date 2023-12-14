import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default (props) => {

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    });
    
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <View style={styles.texto}>
                    <Text style={styles.texti}> {props.label} </Text>
                    <TextInput
                        value={props.text}
                        onChangeText={(text) => {
                            props.setText(text);
                        }}
                        paddingTop={9}
                        paddingLeft={4}
                        color='white'
                    />
                </View>
            </View>
        );
    }
}

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
        flex: 2

    },
    texti: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    }

})
