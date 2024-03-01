import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

export const FormTitle = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.color};
    margin-bottom: 20px;
`;

export const FormInput = styled.TextInput`
    width: 80%;
    height: 40px;
    border-width: 1px;
    border-color: ${props => props.theme.color};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
`;

export const SendButton = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    background-color: ${props => props.theme.colorIndex};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const SendButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const SubContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-top: 20px;
`;

export const Textcc = styled.Text`
    color: ${props => props.theme.color};
`;