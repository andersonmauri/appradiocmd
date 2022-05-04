import react from "react";
import styled from 'styled-components';
import { SafeAreaView, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TabNav from './src/navigators/TabNav'
import 'react-native-gesture-handler';

export default function () {

    return (

        <NavigationContainer>

            <TabNav />
        </NavigationContainer>
    )
}
