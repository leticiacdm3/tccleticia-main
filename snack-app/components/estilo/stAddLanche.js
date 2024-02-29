import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    borderWidth: 1px;
    border-radius: 15px;
    height: 40px;
    width: 300px;
    marginBottom: 20px;
    paddingLeft: 10px;
    backgroundColor: white;
    alignSelf: center;
    borderColor: black;
`;

export const Txt = styled.Text`
    color: ${({theme}) => theme.color};
    font-size: 20px;
    paddingLeft: 8px;
    marginBottom: 5px;
    marginLeft: 55px;
`;

export const Meio = styled.View`
    flex: 2;
    width: 100%;
    height: 100%;
    paddingTop: 30px;
`;

export const BotImg = styled.View`
    width: 70%;
    backgroundColor: ${({theme}) => theme.color};
    height: 80px;
    marginTop: 20px;
    alignSelf: center;
    borderRadius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Superior = styled.View`
    flex: 0.1;
    paddingBottom: 30px;
    marginRight: 50px;
    alignSelf: left;
    width: 100%;
    height: 100%;
    paddingLeft: 10px;
    paddingTop: 15px;
`;

export const Botao = styled.TouchableOpacity`
    alignSelf: center;
    marginTop: 30px;
    marginBottom: 20px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${({theme}) => theme.bgAdd};
    width: 200px;
    height: 30px;
    borderRadius: 10px;
    flexDirection: row;
`;

export const Avatar = styled.Image`
    width: 200px;
    height: 200px;
`;

export const BotaoSave = styled.TouchableOpacity`
    alignSelf: center;
    marginTop: 30px;
    marginBottom: 20px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: '#007F1E';
    width: 150px;
    height: 40px;
    flexDirection: row;
    borderRadius: 10px;
`;

export const Icone = styled(Icon)`
    color: ${({theme}) => theme.topColor};
`;
export const Icone2 = styled(Icon)`
    color: ${({theme}) => theme.colorIcone2};
`;
export const TxtAddImg = styled.Text`
    color: ${({theme}) => theme.bottomColor};

`;