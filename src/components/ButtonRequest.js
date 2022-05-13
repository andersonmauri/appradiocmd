import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

const ButtonRequest = styled.TouchableOpacity`
margin-top: 20px;
width:90%;
height:40px;
border-radius:10px;
background-color:#ff8f45;
justify-content:center;
align-items:center;
margin-bottom:10px;
`;

export default () => {
    return (

        <ButtonRequest>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Fazer Pedido</Text>
        </ButtonRequest>

    )

}