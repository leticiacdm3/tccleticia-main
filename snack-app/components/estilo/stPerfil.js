import styled from "styled-components";

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
flex-direction: row;
background-color: #011837;
`;

export const Meio = styled.View`
width: 100%;
flex: 1;
align-items: center;
justify-content: center;
background-color:#011837 ;
`;

export const Inferior = styled.View`
width: 100%;
height: 7%;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
background-color: #011837;
`;

export const Voltar = styled.View`
align-self: flex-start;
margin-left: 15;
margin-top: 30;
`;

export const TopHome = styled.View`
fontFamily: Montserrat-Regular;
fontSize: 30;
padding-left: 120;
color: white;
margin-top: 10;
`;

export const User = styled.View`
padding-left: 70;
margin-top: 10;
margin-right: 15;
`;

export const Userr = styled.View`
margin-top: 10;
`;

export const Sair = styled.View`
color: white;
`;

export const Nome = styled.Text`
fontFamily: Montserrat-Regular;
fontSize: 15;
color: white;
`;

export const Titulo = styled.Text`
fontFamily: Montserrat-Regular;
fontSize:27;
padding-left: 120;
color: white;
marginTop: 15;
`;

export const Section = styled.View`
paddingTop: 12;
`;

export const SectionHeader = styled.View`
paddingRight: 260;
paddingVertical: 8;
`;

export const SectionHeaderText = styled.Text`
fontSize: 14;
fontWeight: 600;
color: white;
textTransform: uppercase;
letterSpacing: 1.2;
`;

export const RowWrapper = styled.View`
paddingLeft: 24;
borderTopWidth: 1;
borderColor: #1A375C;
backgroundColor: #011D41;
`;

export const Row = styled.View`
flex-direction: row;
height: 50;
align-items: center;
justify-content: flex-start;
paddingRight: 24;
`;

export const RowLabel = styled.Text`
fontSize: 17;
fontWeight: 500;
color: white;
`;

export const RowSpacer = styled.View`
flex: 1;
`;

export const RowValue = styled.Text`
fontSize: 17;
color: white;
marginRight: 4;
`;