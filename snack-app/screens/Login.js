import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {useState} from 'react';
import Field from '../components/Field';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Password from '../components/Password';

export default function Login() {
  const [userMessage, setUserMessage] = useState(false);
  const [fontsLoaded] = useFonts ({
    'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
  });
  
  if(fontsLoaded){
  return (
    <>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.darkbg, styles.container]}>
    <View style= {styles.container}>
    <View>
      <View>
          <Image style={styles.image}source={require('../assets/logoescuro.png')}/>
      </View>
    </View>

    <View style={styles.inferior}>
    <View>
      {
        userMessage ? <Text style={styles.loginMsg}>Usuário ou senha inválido</Text> : null
      }
      
    </View>
    
        <View style={styles.loginForm}>
              <Field label='E-MAIL' icon= 'user'/>
              <Password labelpass= 'SENHA' ipassword= 'lock' />

              <TouchableOpacity onPress={()=>setUserMessage(true)} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>ENTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>

              <View style={styles.naoPossui}>
                <Text style={styles.notYet}>Ainda não possui conta? </Text>
                <TouchableOpacity>
                  <Text style={styles.naoPossuiCadastre}>CADASTRE-SE</Text>
                </TouchableOpacity>
                </View>
        </View>
    </View>
    </View>
    </KeyboardAvoidingView>

    </>
    
  );}
      else{
        return <Splash/>
      }
}
     const styles = StyleSheet.create({

      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      notYet:{
        fontFamily: 'LisuBosa-Regular',
        fontSize: 20,
        color: '#fff'
      },
      naoPossuiCadastre:{
        color: '#00BF63',
        fontFamily: 'LisuBosa-Regular',
        fontSize: 20,
      },
      naoPossui:{
        flexDirection: 'row',
        paddingTop: 100,

      },
      forgotPassword:{
        marginTop: 7
      },
      forgotPasswordText:{
        fontFamily: 'LisuBosa-Regular',
        fontSize: 17,
        color: '#AE7CD4'
      },
      superior:{
        height: '50%',
        width: '100%',
      },
      inferior:{
        height: '50%',
        width: '100%',
        marginBottom: 100
      },
      image:{
        width: 270,
        height: 80,
        resizeMode: 'contain',
        paddingBottom:300,
        marginTop: 100
      },
      darkbg:{
        backgroundColor: '#00BF63'
      },
      loginMsg:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
        marginBottom:0,
        alignSelf: 'center'
      },
      loginForm:{
        width:'80%',
        alignItems: 'center',
        fontFamily: 'LisuBosa-Regular',
      },
      loginInput:{
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 7,
        marginBottom: 15
      },
      loginButton:{
        padding: 4,
        height: '15%',
        width: 110,
        height:40,
        backgroundColor: '#00BF63',
        justifyContent: 'center',
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 40,
      },
      loginButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00BF63',
        textAlign: 'center',
      }

     })
