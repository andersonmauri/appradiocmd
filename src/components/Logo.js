import React from 'react'
import { Image, View } from 'react-native';
import styled from 'styled-components';

const Logo = styled.View`
    width:auto;
    height:auto;
    justify-content:center;
    align-items:center;
    
`;

export default () => {
    return (
        <Logo><Image source={require('../../assets/2.png')} style={{ width: 120, height: 120, marginTop: 90 }} />

        </Logo>
    )
}