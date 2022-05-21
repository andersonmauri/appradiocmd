import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, Alert } from 'react-native';

const ButtonRequest = styled.TouchableOpacity`
margin-top: 20px;
width:90%;
height:40px;
border-radius:10px;
background-color:#ef5350;
justify-content:center;
align-items:center;
margin-bottom:10px;
`;

export default () => {
    const twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
            //title
            'Obrigado!',
            //body
            'Seu pedido foi enviado com sucesso! Deseja fazer outro pedido?',
            [
                {
                    text: 'Sim',
                    onPress: () => console.log('Yes Pressed')
                },
                {
                    text: 'Não, obrigado!',
                    onPress: () => console.log('No Pressed'), style: 'cancel'
                },
            ],
            { cancelable: false },
            //clicking out side of alert will not cancel
        );
    };
    return (

        <ButtonRequest onPress={twoOptionAlertHandler}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Fazer Pedido</Text>
        </ButtonRequest>

    )

}