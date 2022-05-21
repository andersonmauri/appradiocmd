import React from 'react';
import styled from 'styled-components/native';
import { View, TextInput, Button, StatusBar, Text, Platform, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPlay from '../components/ButtonPlay'
import ButtonPause from '../components/ButtonPause'
import ButtonSound from '../components/ButtonSound'
import Logo from '../components/Logo'
import Capa from '../components/CapaMusica'


const Container = styled.SafeAreaView`
  flex:1  ;  
  align-items:center;
`;

const Texto = styled.Text`
color:#fff;
padding-bottom:25px
`;

const Nome = styled.Text`
color:#fff;
padding-top:10px;
font-size:18px;
font-weight:bold
`;







// 2ª metodo de navegar entre paginas
function Home() {



    return (
        <ImageBackground source={require('../../assets/background2.jpg')} style={styles.image}>
            <Container>
                {Platform.OS == 'ios' && (<StatusBar barStyle="white-content" />)}
                <Logo />
                <Nome>Rádio Ministério Café com Deus</Nome>
                <Capa />
                <Texto style={{ marginTop: 20 }}>Ministério Viva Esperança - Tuas Águas</Texto>
                <View style={styles.buttons}>
                    <ButtonSound />
                    <ButtonPlay style={{ marginRight: 50, padding: 50 }} />
                    <ButtonPause />

                </View>


            </Container>
        </ImageBackground >
    )
}


const styles = StyleSheet.create({
    buttons: {
        display: 'flex',
        flexDirection: 'row'

    },
    image: {
        flex: 1,
        width: '100%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default Home;