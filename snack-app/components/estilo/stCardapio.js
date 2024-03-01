import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Superior = styled.View`
    width: 100%;
    height: 10%;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({theme}) => theme.topColor};
    flex-direction: row;
`;

export const Meio = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.background};
`;

export const Inferior = styled.View`
    width: 100%;
    height: 7%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.bottomColor};
`;

export const Voltar = styled.TouchableOpacity`
    align-self: flex-start;
    margin-left: 15px;
    margin-top: 30px;
`;

export const User = styled.TouchableOpacity`
    padding-left: 275px;
    margin-top: 10px;
    margin-right: 15px;
`;

export const Userr = styled.TouchableOpacity`
    margin-top: 10px;

`;

export const AddLanche = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.topColor};
    width: 250px;
    height: 50px;
    align-items: center;
    justify-content: center;
    marginBottom: 100px;
    borderRadius: 30px;
    flex-direction: row;
    marginTop: 30px;
    marginLeft: 60px;
`;

export const AddLancheText = styled.Text`
    fontFamily: 'Montserrat-Regular';
    fontSize: 15px;
    color: white;
    padding-left: 10px;
`;

export const Meinho = styled.ScrollView`
 paddingTop: 20px;
`;

export const BottomIcon = styled(Icon)`
color: ${props => props.theme.iColor};
`;

export const BotaoClicado = styled(Icon)    `
color: ${({theme}) => theme.topColor}; 
`;