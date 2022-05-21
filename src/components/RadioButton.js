import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

const RadioButton = ({ options = [], horizontal = false, onChangeSelect, selected }) => {

    return (

        <View style={horizontal ? styles.horizontal : styles.vertical}>
            {
                options.map((opt, index) => (
                    <View style={styles.optContainer}>
                        <TouchableOpacity onPress={() => onChangeSelect(opt, index)} style={styles.optContainer}>
                            <View style={styles.outLineCircle}>
                                {selected === index && <View key={index} style={styles.innerCircle} />}
                            </View>
                            <Text style={[styles.text, { color: selected == index ? '#fff' : '#c5c5c5' }]}>{opt}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }

        </View>


    )
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    vertical: {

    },
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        padding: 5


    },
    outLineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,

        backgroundColor: '#fff'


    },

    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 2,


    }
})


export default RadioButton;