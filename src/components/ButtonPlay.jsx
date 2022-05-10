import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const ButtonPlay = styled.View`
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
        <ButtonPlay>
            <Icon name="play" color='#FF6700' size={30}
            />
        </ButtonPlay>
    )

}