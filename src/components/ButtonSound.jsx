import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';



const ButtonSound = styled.TouchableOpacity`
width:40px;
height:40px;
border-radius:20px;
background-color:#fff;
justify-content:center;
align-items:center;
margin-bottom:10px;
margin-right:20px;
`;

export default (status) => {
    const [ico, setIco] = useState(status);



    return (
        <ButtonSound onPress={e => setIco(!ico)}>
            <Icon name={ico ? "volume-2" : "volume-x"} color='#FF6700' size={30}

            />
        </ButtonSound>
    )

}