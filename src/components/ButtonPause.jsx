import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const ButtonPause = styled.View`
width:40px;
height:40px;
border-radius:20px;
background-color:#fff;
justify-content:center;
align-items:center;
margin-bottom:10px;
margin-left:20px;
`;

export default () => {
    return (
        <ButtonPause>
            <Icon name="pause" color='#FF6700' size={30}
            />
        </ButtonPause>
    )

}