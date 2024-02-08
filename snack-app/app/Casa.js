import { StyleSheet, Text, View, TouchableOpacity as TO, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Container, Name, Description, Meio, Superior, Inferior, TopHome, User, Userr, BottomTO, BottomIcon } from '../components/estilo/stHome.js'
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
                        {/* <TO style={styles.addLanche} onPress={()=> nav.navigate('Lanche')}>
                            <AntDesign name={'pluscircleo'} size={30} color='white'/>
                            <Text style={styles.addLancheText}> ADICIONAR LANCHES </Text>
                        </TO> */}
                    </Meio>

                    <Inferior>
                        <TO>
                            <BottomIcon name={'home'} size={35} />
                        </TO>
                        <TO onPress={() => nav.navigate('Cardapio')}>
                            <BottomIcon name={'food'} size={30}  />
                        </TO>
                        <TO onPress={() => nav.navigate('Pagamento')}>
                            <BottomIcon name={'cash'} size={35} />
                        </TO>
                        <TO onPress={() => nav.navigate('Feedback')}>
                            <BottomIcon name={'account-heart-outline'} size={30} />
                        </TO>
                    </Inferior>

                </Container>
            </ThemeProvider>
        );

    }
}