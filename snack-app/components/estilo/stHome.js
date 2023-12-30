import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
flex: 1;
background-color: ${props => props.theme.background};
align-items: center;
justify-content: center;
`;
export const Name = styled.Text`
font-size: 30px;
color:  ${props => props.theme.color};
`;
export const Description = styled.Text`
color: black;
font-style: italic;
background-color: #e9e9e9;
padding: 8px 20px;
marginTop: 10px;
`;

export const Meio = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;
export const Superior = styled.View`
width: 100%;
height: 10%;
align-items: center;
justify-content: flex-start;
background-color: ${props => props.theme.topColor};
flex-direction: row;
`;
export const Inferior = styled.View`
width: 100%;
height: 7%;
align-items: center;
justify-content: space-evenly;
background-color: ${props => props.theme.bottomColor};
flex-direction: row;
`;
export const TopHome = styled.Text`
fontFamily: 'Montserrat-Regular';
fontSize: 30px;
paddingLeft: 160px;
color: white;
marginTop: 10px;
`;

export const User = styled.TouchableOpacity`
paddingLeft: 70px;
marginTop: 10px;
marginRight: 15px;
`;

export const Userr = styled.TouchableOpacity`
marginTop: 10px;
`;

export const BottomIcon = styled(Icon)`
color: ${props => props.theme.iColor};
`;
