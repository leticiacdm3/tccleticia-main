import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Icone = styled(Icon)`
color: white;
`;

export const Superior = styled.View`
width: 100%;
height: 10%;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: ${props => props.theme.bgPerfil} ;
`;

export const Meio = styled.View`
width: 100%;
flex: 1;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.bgPerfil} ;
`;

export const Inferior = styled.View`
width: 100%;
height: 7%;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
background-color: ${props => props.theme.bgPerfil};
`;

export const Voltar = styled.TouchableOpacity`
align-self: flex-start;
margin-left: 15px;
margin-top: 30px;
`;

export const TopHome = styled.View`
fontFamily: Montserrat-Regular;
fontSize: 30px;
padding-left: 120px;
color: ${props => props.theme.colorPerfil};
margin-top: 10px;
`;

export const User = styled.View`
padding-left: 70px;
margin-top: 10px;
margin-right: 15px;
`;

export const Userr = styled.View`
margin-top: 10px;
`;

export const Sair = styled.View`
color: ${props => props.theme.colorPerfil};
`;

export const Nome = styled.Text`
fontFamily: Montserrat-Regular;
fontSize: 15px;
color: white;
`;

export const Titulo = styled.Text`
fontFamily: Montserrat-Regular;
fontSize:27px;
padding-left: 80px;
color: ${props => props.theme.colorVoltIcon};
marginTop: 15px;
`;

export const Section = styled.View`
paddingTop: 12px;
`;

export const SectionHeader = styled.View`
paddingRight: 260px;
paddingVertical: 8px;
`;

export const SectionHeaderText = styled.Text`
fontSize: 14px;
fontWeight: 600;
color: ${props => props.theme.colorVoltIcon};
textTransform: uppercase;
letterSpacing: 1.2px;
`;

export const RowWrapper = styled.View`
paddingLeft: 24px;
borderTopWidth: 1px;
borderColor: ${ props => props.theme.borderPerfil};
backgroundColor: ${props => props.theme.bgRow};
`;

export const Row = styled.View`
flex-direction: row;
height: 50px;
align-items: center;
justify-content: flex-start;
paddingRight: 24px;
`;

export const RowLabel = styled.Text`
fontSize: 17px;
fontWeight: 500;
color: ${props => props.theme.colorVoltIcon};
`;

export const RowSpacer = styled.View`
flex: 1;
`; 

export const RowValue = styled.Text`
fontSize: 17px;
color: ${props => props.theme.colorVoltIcon};
marginRight: 4px;
`;

export const Icones = styled(Icon)`
color: ${props => props.theme.colorIcones};
`;

export const VoltIcon = styled(Icon)`
color: ${props => props.theme.colorVoltIcon};
`;

export const SairIcon = styled(Icon)`
color: ${props => props.theme.colorVoltIcon};
`;

export const Pjc = styled.TouchableOpacity`
background-color: gray;
width: 200px;
height: 40px;
borderRadius: 20px;
align-items: center;
justify-content: center;
alignSelf: center;
marginTop: 50px;
`;

export const PjcText = styled.Text`
fontWeight: 500;
color: ${props => props.theme.colorPerfil};
fontSize: 20px;
`;