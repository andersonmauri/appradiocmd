import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const ButtonRadio = styled.View`
width:70px;
height:70px;
border-radius:35px;
background-color:#d87c3f;
justify-content:center;
align-items:center;
margin-bottom:10px;
`;

export default () => {
    return (
        <ButtonRadio>
            <Icon name="radio" color='#FFF' size={30}
            />
        </ButtonRadio>
    )

}