import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, TextInput, Button, StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Container = styled.SafeAreaView`
  flex:1  
  background-color:#FFF;
  justify-content:center;
  align-items:center;
`;



// 2ª metodo de navegar entre paginas
function Home() {

    return (
        <Container>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>


                <StatusBar backgroundColor="#0098ED" translucent={true} barStyle="dark-content" />

                <Text>Tela Home</Text>
            </LinearGradient>
        </Container>
    )
}

export default Home;