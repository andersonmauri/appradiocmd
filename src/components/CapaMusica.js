import React from 'react'
import { Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components';

const Capa = styled.View`
    width:auto;
    height:auto;
    justify-content:center;
    align-items:center;
    
`;

export default () => {
    return (
        <Capa style={styles.capa}><Image source={require('../../assets/capa-musica.jpg')} style={[styles.shadowProp, styles.capa]} />

        </Capa>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    capa: {
        width: 200,
        height: 200,
        marginTop: 20,
    }
})