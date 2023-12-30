import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: ${props => props.theme.bgIndex};
align-items: center;
justify-content: center;
`;

export const Snack = styled.Text`
fontFamily: 'Montserrat-Regular';
color: ${props => props.theme.colorIndex};
fontSize: 35px;
paddingTop: 300px;
`;

export const Tela = styled.View`
flex:1;
justifyContent: flex-end;
`;

export const RegisterButton = styled.TouchableOpacity`
padding:4px;
height: 40px;
width: 300px;
backgroundColor: ${props => props.theme.colorIndex};
justifyContent: center;
alignSelf: center;
marginTop: 10px;
marginBottom: 10px;
alignSelf: flex-end;
borderRadius: 10px;
`;

export const RegisterButtonText = styled.Text`
fontSize: 20px;
color: ${props => props.theme.textColorIndex};
textAlign: center;
fontFamily: 'Montserrat-Regular';
`;

export const EnterButton = styled.TouchableOpacity`
padding:4px;
height: 40px;
width: 300px;
backgroundColor: ${props => props.theme.bgEnterIndex};
justifyContent: center;
alignSelf: center;
marginBottom: 50px;
alignSelf: flex-end;
borderRadius: 10px;
`;

export const EnterButtonText = styled.Text`
fontSize: 20px;
color: white;
textAlign: center;
fontFamily: 'Montserrat-Regular';
`;