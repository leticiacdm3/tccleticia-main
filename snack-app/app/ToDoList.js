import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import React from 'react';
import { IconButton } from 'react-native-paper';
import themes from '../components/themes';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import { Container, Inferior, Meio, Superior, TopHome, TxtInput, Voltar, BottomIcon, Itens, ItemText, Botao, BotaoClicado } from '../components/estilo/stToDoList';
import Splash from './Splash';

export default function Clientes() {
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });
    const Data = [
        {
            id: '01',
            title: 'Comprar pão',
        },
        {
            id: '02',
            title: 'Comprar leite',
        },
    ];
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleAddTodo = () => {
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo("")
    }
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)
        setTodoList(updatedTodoList);
    }
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;

    const Item = ({ title }) => (
        <Itens>

            <ItemText>{title}</ItemText>
            <IconButton icon="pencil" iconColor='#fff' />
            <IconButton icon="trash-can" iconColor='#fff' onPress={() => handleDeleteTodo(title.id)} />
        </Itens>
    )
    if (fontsLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Superior>
                        <Voltar>
                            <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Casa')} />
                        </Voltar>
                        <TopHome> Lista de tarefas</TopHome>
                    </Superior>

                    <Meio>
                        <TxtInput
                            placeholderTextColor={'gray'}
                            placeholder='Adicione uma tarefa'
                            value={todo}
                            onChangeText={(userText) => setTodo(userText)}
                        />
                        <Botao
                            onPress={() => handleAddTodo()}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16,

                            }}>ADICIONAR</Text>
                        </Botao>

                        <FlatList data={todoList} renderItem={({ item }) => <Item title=
                            {item.title} />}
                            keyExtractor={item => item.id}
                        />
                    </Meio>

                    <Inferior>
                        <TO onPress={() => nav.navigate('Casa')}>
                            <BottomIcon name={'home'} size={35} />
                        </TO>
                        <TO onPress={() => nav.navigate('Cardapio')}>
                            <BottomIcon name={'food'} size={30} />
                        </TO>
                        <TO onPress={() => nav.navigate('ToDoList')}>
                            <BotaoClicado name={'cash'} size={40} />
                        </TO>
                    </Inferior>

                </Container>
            </ThemeProvider>
        );
    }
    else {
        return <Splash />
    }
}

