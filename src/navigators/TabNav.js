import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import Home from '../pages/Home';
import About from '../pages/About';
import Donation from '../pages/Donation';
import Program from '../pages/Program';
import PrayRequest from '../pages/PrayRequest';
import ButtonRadio from '../components/ButtonRadio';

import { Entypo, Feather } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Feather';




const Tab = createBottomTabNavigator();


export default () => {
    return (

        <Tab.Navigator
            tabBarOptions={{
                // activeBackgroundColor:
                //     '#38727d',
                activeTintColor: '#FFF',
                style: {
                    backgroundColor: '#e6c4a4',
                    borderTopColor: 'transparent',
                    height: 90,
                },



                labelStyle: {
                    // color: '#808080',
                    fontWeight: 'bold',
                    fontSize: 11,
                    paddingTop: 5,

                },
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,

                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {



                        case 'Sobre':
                            iconName = 'list';
                            break;
                        case 'Programação':
                            iconName = 'edit';
                            break;
                        case 'Doações':
                            iconName = 'credit-card';
                            break;
                        case 'Pedidos':
                            iconName = 'message-circle';
                            break;


                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}

        >



            <Tab.Screen
                name="Sobre"
                component={About}

            />

            <Tab.Screen
                name="Programação"
                component={Program} />
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: () => (<ButtonRadio />),
                    tabBarLabel: '',
                    activeBackgroundColor: false,

                }}
            />
            <Tab.Screen
                name="Doações"
                component={Donation} />

            <Tab.Screen
                name="Pedidos"
                component={PrayRequest} />

        </Tab.Navigator>
    )
}