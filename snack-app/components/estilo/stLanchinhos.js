import styled from "styled-components";

export const Container = styled.View`
    background-color: ${props => props.theme.topColor};
    width: 380px;
    height: 100px;
    flex-direction: row;
    borderRadius: 20px;
    justify-content: center;
    margin-bottom: 10px;
`;

export const TextFood = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    fontFamily: 'Montserrat-Regular';
`;

export const MoneyText = styled.Text`
    color: white; 
    font-size: 17px;
    fontFamily: 'Montserrat-Regular';
    marginTop: 15px;
`;

export const Vtxt = styled.View`
    align-self: center;
    margin-left: 20px;
    margin-right: 70px;
`;

export const Vimg = styled.View`
    margin-top: 16px;
    align-self: left;
    marginLeft: -15px;
`;

export const Carrinho = styled.View`
    align-self: center;
`;