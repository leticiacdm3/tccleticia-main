import { StyleSheet, View, Image } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={styles.superior}>
      </View>
      <Image style={styles.imagem} source={require('../assets/logoescuro.png')} />
      <View style={styles.inferior}>
        <Image style={styles.demarco} source={require('../assets/demarcoEscuro.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C1C83',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: 200,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  demarco: {
    width: 100,
    height: 35,
    marginBottom: 50,
  },

  superior: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inferior: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});