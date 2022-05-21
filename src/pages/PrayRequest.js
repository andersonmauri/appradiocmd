import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, TextInput, Button, StatusBar, Text, Platform, StyleSheet, ImageBackground, Keyboard, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import RadioButton from '../components/RadioButton'
import ButtonRequest from '../components/ButtonRequest'
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled.SafeAreaView`
 width:90%;
 height:600px; 
background-color: rgba(0, 0, 0, 0.2);

border-radius:10px;
 
  align-items:center;
`;

const Input = styled.TextInput`
border: 1px solid #C1C1C1;
border-radius:10px;
height:50px;
width:90%;
font-size:18px;
margin-top:20px
padding:5px
`

const Titulo = styled.Text`
    font-size:19px;
    text-transform:uppercase;
    font-weight: bold;
    color: #f5f5f5;
`;






// 2ª metodo de navegar entre paginas
function PrayRequest() {

    const [selected, setSelected] = useState(0);

    const [name, setName] = useState('Seu Nome');

    const [email, setEmail] = useState('Seu Email');

    const [request, setRequest] = useState('Seu Pedido')




    return (


        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={require('../../assets/background2.jpg')} style={styles.image}>

                <Container >
                    <Image source={require('../../assets/2.png')} style={{ width: 100, height: 100, marginTop: 20, alignItems: 'center', marginBottom: 20 }} />

                    <Titulo>Tem algum pedido?</Titulo>

                    <Text style={{ color: 'white', fontSize: 15 }}>Selecione o que deseja pedir:</Text>

                    <RadioButton selected={selected} options={['Música', 'Oração']} horizontal={true} onChangeSelect={(opt, i) => setSelected(i)} />



                    <Input
                        setName={setName}

                        onChangeText={n => setName(n)}
                        placeholder="Nome"
                        placeholderTextColor="#ccc"
                        style={styles.input}
                    />

                    <Input setName={setName}
                        placeholder="Seu E-mail"
                        placeholderTextColor="#ccc"
                        onChangeText={e => setEmail(e)}
                        style={styles.input}
                        keyboardType="email-address"

                    />
                    <Input placeholder="Seu Pedido"
                        placeholderTextColor="#ccc"
                        setRequest={setRequest}
                        onChangeText={r => setRequest(r)}
                        style={[styles.input, { height: 120, paddingBottom: 80 }]}
                    />
                    <ButtonRequest />


                </Container>
            </ImageBackground>


        </TouchableWithoutFeedback>


    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        color: 'white',

    }
})

export default PrayRequest;