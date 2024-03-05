import { StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
export default (props) => {
    const [fontsLoaded] = useFonts({
        'LisuBosa-ExtraLight': require('../assets/fonts/LisuBosa-ExtraLight.ttf'),
    });

    return (
        <View style={styles.container}>
            <View style={styles.icone} >
                <Icon name={props.icon} size={20} color='white' />
            </View>
            <View style={styles.texto}>
                <TextInput placeholder={props.label} value={props.email} onChangeText={(text) => props.setText(text)} keyboardType='email-address' placeholderTextColor={'white'} color='white' autoCapitalize='none'></TextInput>
            </View>
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

    texto: {
        color: 'white',
        paddingBottom: 0,
        paddingLeft: 4,
        paddingTop: 3,
        flex: 2,
        selectionColor: 'white'

    },

})