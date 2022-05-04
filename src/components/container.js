import react from "react";
import styled from "styled-components";
import { SafeAreaView, Image, Text, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';

const Container = styled.SafeAreaView`
flex:1
justify-content:center;
align-items:center;
background-color: #c6c6c6;

`;

export default () => {
    return (
        <Container >
            <Text>Rodrigo APP!</Text>
            <TextInput style={{ height: 50, width: 150, border: '1px solid black' }} />

        </Container>
    )
}