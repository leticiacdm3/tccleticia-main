import styled from "styled-components";

export const Container = styled.KeyBoardAvoidingView`
flex: 1;
justifyContent: center;
alignItems: center;
backgroundColor: ${props => props.theme.topColor};
`;

export const NotYet = styled.Text`
fontSize: 17px;
color: ${props => props.theme.colorNotYet};
fontFamily: Montserrat-Regular;
`;

export const NaoPossuiCadastre = styled.Text`
color: ${props => props.theme.colorNaoPossuiCadastre};
fontSize: 17px;
fontFamily: Montserrat-Regular;
`;

export const NaoPossui = styled.View`
flexDirection: row;
paddingTop: 100px;
`;

export const ForgotPassword = styled.View`
marginTop: 7px;
`;

export const ForgotPasswordText = styled.Text`
fontFamily: Montserrat-Regular;
fontSize: 17px;
color: ${props => props.theme.colorRegisterButton};
`;

export const Superior = styled.View`
height: 50%;
width: 100%;
`;

export const Inferior = styled.View`
height: 50%;
width: 100%;
marginBottom: 100px;
`;

export const Image = styled.Image`
width: 270px;
height: 80px;
resizeMode: contain;
paddingBottom: 300px;
marginTop: 100px;
`;


export const LoginMsg = styled.Text`
fontWeight: bold;
fontSize: 14px;
color: ${props => props.theme.colorNotYet};
marginTop: 10px;
alignSelgf: center;
fontFamily: Montserrat-Regular;
`;

export const LoginForm = styled.View`
width: 80%;
alignItems: center;
fontFamily: Montserrat-Regular;
`;

export const LoginInput = styled.TextInput`
backgroundColor: ${props => props.theme.colorNotYet};
fontSize: 20px;
padding: 7px;
marginBottom: 15px;
fontFamily: Montserrat-Regular;
`;

export const LoginButton = styled.TouchableOpacity`
padding: 4px;
height: 15%;
width: 110px;
height: 40px;
backgroundColor: ${props => props.theme.colorIndex};
justifyContent: center;
borderRadius: 40px;
alignSelf: center;
marginTop: 40px;
`;

export const LoginButtonText = styled.Text`
fontWeight: bold;
fontSize: 20px;
color: ${props => props.theme.colorRegisterButton};
textAlign: center;
fontFamily: Montserrat-Regular;
`;

export const ButtonLoginText = styled.Text`
fontWeight: bold;
fontSize: 20px;
color: #DBD7D7;
textAlign: center;
fontFamily: Montserrat-Regular;
`;

export const ButtonLogin = styled.TouchableOpacity`
padding: 4px;
height: 15%;
width: 110px;
height: 40px;
backgroundColor: gray;
justifyContent: center;
borderRadius: 40px;
alignSelf: center;
marginTop: 40px;
`;
