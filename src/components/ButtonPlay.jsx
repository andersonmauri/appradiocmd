import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const ButtonPlay = styled.TouchableOpacity`
width:60px;
height:60px;
border-radius:30px;
background-color:#fff;
justify-content:center;
align-items:center;
margin-bottom:10px;
`;

export default () => {
    return (
        <ButtonPlay onPress={() => (alert('Deu play na rádio'))}>
            <Icon name="play" color='#FF6700' size={30}
            />
        </ButtonPlay>
    )

}