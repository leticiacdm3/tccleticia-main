import { StyleSheet, View, Text } from 'react-native';
export default (props) => {

    return(
        <View style={styles.container}>
                <Text style={styles.texto}>{props.namee}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'left',
        alignItems: 'left',
        width: '70%',
        height: '11%',
        paddingLeft:4,
        paddingTop:7,
        flex:2,
        

    },
    texto:{
        paddingBottom: 3,
        color: 'white'
    }


})