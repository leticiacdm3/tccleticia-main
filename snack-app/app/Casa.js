import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Container, Name, Description, Meio, Superior, Inferior, TopHome, User, Userr } from '../components/styles.js';
import { ThemeProvider } from 'styled-components'
import themes from '../components/themes'
import { useColorScheme } from 'react-native';


export default function Home() {
    const nav = useNavigation();

    const deviceTheme = useColorScheme();

    const theme = themes[deviceTheme] || theme.dark;

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    if (fontsLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Superior>
                        <TopHome>HOME</TopHome>
                        <User>
                            <AntDesign name={'shoppingcart'} size={30} color='white' />
                        </User>
                        <Userr onPress={() => nav.navigate('Perfil')}>
                            <Icon name={'user'} size={25} color='white' />
                        </Userr>
                    </Superior>

                    <Meio>

                        <Name>Em construção</Name>

                        <Description>Em construção</Description>

                    </Meio>

                    <Inferior>
                        <TO>
                            <SimpleLineIcons name={'home'} size={30} color='white' />
                        </TO>
                        <TO onPress={() => nav.navigate('Cardapio')}>
                            <Ionicons name={'fast-food-outline'} size={30} color='white' />
                        </TO>
                        <TO onPress={() => nav.navigate('Pagamento')}>
                            <FontAwesome name={'dollar'} size={30} color='white' />
                        </TO>
                        <TO onPress={() => nav.navigate('Feedback')}>
                            <MaterialCommunityIcons name={'account-heart-outline'} size={30} color='white' />
                        </TO>
                    </Inferior>

                </Container>
            </ThemeProvider>
        );

    }
}