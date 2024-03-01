import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.topColor};
    align-items: center;
    justify-content: center;
`;

export const Voltar = styled.TouchableOpacity`
    padding-bottom: 30px;
    margin-right: 50px;
    margin-left: 30px;
    flex: 1;
    padding-top: 90px;
    alignSelf: left;
`;

export const Meio = styled.View`
    flex: 5;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 180px;
`;

export const TextInsta = styled.Text`
    color: white;
    font-family: YsabeauSC-Medium;
`;

export const TextInst = styled.Text`
    color: white;
    font-family: YsabeauSC-Medium;
    font-size: 30px;

`;
