import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, SafeAreaView, TextInput, Button, StatusBar, Text, StyleSheet, Image } from 'react-native';


const Container = styled.SafeAreaView`
  flex:1  
  background-color:#fff;
  justify-content:center;
  align-items:center;
`;

const Texto = styled.Text`
color: #FFF;
margin:20px;
padding:5px;
text-align: justify;

`;

const TextArea = styled.View`
background-color: rgba(0, 0, 0, 0.5);
`;


// 2ª metodo de navegar entre paginas
function About() {

    return (
        <Container>
            <ImageBackground source={require('../../assets/background.jpg')} style={styles.image}>
                <TextArea>
                    <Image source={require('../../assets/2.png')} style={{ width: 80, height: 80, marginTop: 20, alignItems: 'center' }} />
                    <Texto>Um projeto que o Senhor Jesus colocou em nossos corações, o Ministério Café com Deus
                        surgiu em 2019 apenas com
                        alguns podcasts na plataforma de streaming de músicas Spotify. Hoje, nosso trabalho vem
                        crescendo e ganhando espaço
                        através da internet com a utilização de transmissões ao vivo pelo YouTube, e agora, mais
                        um
                        passo foi dado e desenvolvemos
                        nossa rádio web. A obra do Senhor é grande, mas poucos são os trabalhadores, através
                        desse trabalho, queremos alcançar pessoas
                        das mais diversas partes do mundo, para que todas tenham a oportunidade de conhecer e
                        experimentar do amor de Cristo.
                        Ficamos imensamente felizes em tê-lo conosco e pedimos ao Senhor que derrame grandes
                        bençãos sobre a sua vida.</Texto>
                </TextArea>

            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default About;