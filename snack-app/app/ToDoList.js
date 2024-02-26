import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Casa from './Casa';
import React from 'react';
import {IconButton} from 'react-native-paper';

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
        setTodoList([...todoList, {id: Date.now().toString(), title: todo}])
        setTodo("")
    }
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo)=> todo.id !== id)
        setTodoList(updatedTodoList);
    }
        
    const Item = ({ title }) => (
        <View style={{ 
            backgroundColor: "#6D458B", 
            borderRadius: 6, 
            paddingHorizontal: 6, 
            paddingVertical: 12, 
            marginBottom: 12, 
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: 'center',
            }}>
            
            <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                flex: 1,
            
            }}>{title}</Text>
            <IconButton icon="pencil" iconColor='#fff'/>
            <IconButton icon="trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(title.id)}/>
        </View>
    )
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <View style={styles.superior}>
                    <TO style={styles.voltar}>
                        <Icon name={'chevron-left'} size={30} color='white' onPress={() => nav.navigate('Casa')} />
                    </TO>
                    <Text style={styles.topHome}>Lista de tarefas</Text>
                    <TO style={styles.user}>
                        <AntDesign name={'shoppingcart'} size={30} color='white' />
                    </TO>
                    <TO style={styles.userr}>
                        <Icon name={'user'} size={25} color='white' onPress={() => nav.navigate('Perfil')} />
                    </TO>
                </View>

                <View style={styles.meio}>
                    <TextInput style={styles.txtInput} 
                    placeholderTextColor={'gray'} 
                    placeholder='Adicione uma tarefa' 
                    value={todo}
                    onChangeText={(userText)=>setTodo(userText)}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: '#6D458B',
                        borderRadius: 6,
                        paddingVertical: 8,
                        marginHorizontal: 10,
                        marginTop: 24,
                        marginVertical: 34,
                        alignItems: 'center'
                    }}
                    onPress={()=>handleAddTodo()}
                    >
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,

                        }}>ADICIONAR</Text>
                    </TouchableOpacity>

                    <FlatList data={todoList} renderItem={({ item }) => <Item title=
                        {item.title} />}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={styles.inferior}>
                    <TO style={styles.casa} onPress={() => nav.navigate('Casa')}>
                        <SimpleLineIcons name={'home'} size={30} color='white' />
                    </TO>
                    <TO style={styles.menu} onPress={() => nav.navigate('Cardapio')}>
                        <Ionicons name={'fast-food-outline'} size={30} color='white' />
                    </TO>
                    <TO style={styles.dinheiro} >
                        <FontAwesome name={'dollar'} size={30} color='white' />
                    </TO>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    superior: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#6D458B',
        flexDirection: 'row'
    },
    meio: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#011837',
        marginHorizontal: 16,
    },

    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#001127',

    },
    voltar: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30
    },
    topHome: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        paddingLeft: 85,
        color: 'white',
        marginTop: 10
    },
    user: {
        paddingLeft: 203.4,
        marginTop: 10,
        marginRight: 15
    },
    userr: {
        marginTop: 10
    },
    txtInput: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: 'white',
    },
});