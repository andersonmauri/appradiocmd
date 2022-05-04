import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, TextInput, Button, StatusBar, Text } from 'react-native';

const Container = styled.SafeAreaView`
  flex:1  
  background-color:#fff;
  justify-content:center;
  align-items:center;
`;

// 2ª metodo de navegar entre paginas
function Program() {

    return (
        <Container>
            <Text>Tela Programação</Text>

        </Container>
    )
}

export default Program;