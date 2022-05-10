import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, TextInput, Button, StatusBar, Text, Platform } from 'react-native';

const Container = styled.SafeAreaView`
  flex:1  
  background-color:#fff;
 
  align-items:center;
`;

const Input = styled.TextInput`
border: 1px solid #000;
height:50px;
width:90%;
font-size:18px;
margin-top:20px
padding:5px
`

const Titulo = styled.Text`
    font-size:19px;
    text-transform:uppercase;
    font-weight: bold
`;




// 2ª metodo de navegar entre paginas
function PrayRequest() {


    const [name, setName] = useState('Seu Nome');

    const [email, setEmail] = useState('Seu Email');

    const [request, setRequest] = useState('Seu Pedido')

    return (
        <Container >
            {Platform.OS == 'android' && (<Container style={{ marginTop: 0 }} />)}
            <Titulo>Tem algum pedido?</Titulo>
            <Text>Selecione o que deseja pedir:</Text>



            <Input
                setName={setName}

                onChangeText={n => setName(n)}
                placeholder="Nome"
                placeholderTextColor="#ccc"
            />

            <Input setName={setName}
                placeholder="Seu E-mail"
                placeholderTextColor="#ccc"
                onChangeText={e => setEmail(e)}
            />
            <Input placeholder="Seu Pedido"
                placeholderTextColor="#ccc"
                setRequest={setRequest}
                onChangeText={r => setRequest(r)}
                style={{ height: 120 }}
            />

        </Container>
    )
}

export default PrayRequest;