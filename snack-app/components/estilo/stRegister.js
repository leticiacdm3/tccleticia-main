import styled from 'styled-components/native';
import Checkbox from 'expo-checkbox';

export const Container = styled.KeyboardAvoidingView`
flex: 1;
background-color: ${props => props.theme.bgRegister};
`;

export const Superior = styled.View`
paddingBottom: 30px;
flexDirection: row;
marginTop: 50px;
`;

export const Meio = styled.View`
flex: 2;
alignItems: center;
justifyContent: center;
paddingTop: 70px;
marginRight: 30px;
marginLeft: 30px;
paddingBottom: 80px;
backgroundColor: ${props => props.theme.bgMeioRegister};
`;

export const Rodape = styled.View`
flex: 1;
marginTop: 50px;
`;

export const RegisterButton = styled.TouchableOpacity`
padding:4px;
height: 40px;
width: 200px;
backgroundColor: ${props => props.theme.bgRegisterButtton};
justifyContent: center;
borderRadius: 50px;
alignSelf: center;
marginTop: 10px;
marginBottom: 50px;
`;

export const RegisterButtonText = styled.Text`
fontWeight: 400;
fontSize: 20px;
color: ${props => props.theme.colorRegisterButton};
textAlign: center;
fontFamily: Montserrat-Regular;
`;

export const TextCadastro = styled.Text`
fontSize: 40px;
color: white;
fontFamily: Montserrat-Regular;
marginTop: 30px;
marginLeft: 20px;
`;

export const NotYet = styled.Text`
fontSize: 20px;
color: white;
fontFamily: Montserrat-Regular;
`;

export const NaoPossuiCadastre = styled.Text`
color: ${props => props.theme.colorNaoPossuiCadastre};
fontSize: 20px;
fontFamily: Montserrat-Regular;
`;

export const NaoPossui = styled.View`
flexDirection: row;
justifyContent: center;
marginBottom: 30px
`;

export const Tdu = styled.Text`
color: white;
fontSize: 15px;
fontFamily: Montserrat-Regular;
`;

export const Termo = styled.Text`
color: ${props => props.theme.colorIndex};
fontSize: 15px;
fontFamily: Montserrat-Regular;
`;

export const Vtermos = styled.View`
flexDirection: row;
width: 100%;
alignItems: center;
justifyContent: center;
`;

