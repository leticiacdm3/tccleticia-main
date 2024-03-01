import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
    background-color: ${props => props.theme.topColor};
    flex-direction: row;
`;

export const Meio = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: ${props => props.theme.background};
    margin-horizontal: 16px;
`;

export const Inferior = styled.View`
    width: 100%;
    height: 7%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${props => props.theme.bottomColor};
`;

export const Voltar = styled.TouchableOpacity`
    align-self: flex-start;
    margin-left: 15px;
    margin-top: 30px;
`;

export const TopHome = styled.Text`
    font-family: Montserrat-Regular;
    font-size: 30px;
    padding-left: 85px;
    color: white;
    margin-top: 10px;
`;

export const TxtInput = styled.TextInput`
    border-width: 2px;
    border-color: ${props => props.theme.bgAdd};
    border-radius: 6px;
    paddingVertical: 12px;
    paddingHorizontal: 16px;
    margin-horizontal: 10px;
    margin-top: 10px;
    background-color: white;
`;

export const Itens = styled.View`
    background-color: ${props => props.theme.topColor};
    borderRadius: 6px;
    paddingHorizontal: 6px;
    paddingVertical: 12px;
    marginBottom: 12px;
    marginHorizontal: 10px;
    flexDirection: row;
    alignItems: center;
`;

export const ItemText = styled.Text`
    color: white;
    font-size: 20px;
    flex: 1;
    fontWeight: 500;
    fontFamily: Montserrat-Regular;
`;

export const BottomIcon = styled(Icon)`
color: ${props => props.theme.iColor};
`; 

export const Botao = styled.TouchableOpacity`
    background-color: ${props => props.theme.topColor};
    border-radius: 6px;
    paddingVertical: 8px;
    marginHorizontal: 10px;
    alignItems: center;
    marginTop: 24px;
    marginVertical: 34px;
`;

export const BotaoClicado = styled(Icon)    `
color: ${({theme}) => theme.topColor};
`;





