import React from 'react'
import { Image, View } from 'react-native';
import styled from 'styled-components';

const Logo = styled.View`
    width:250px;
    height:250px;
`;

export default () => {
    return (
        <Logo><Image source={require('../../assets/branca.png')} style={{ width: 200, height: 200 }} />

        </Logo>
    )
}