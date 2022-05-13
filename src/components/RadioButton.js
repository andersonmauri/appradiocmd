import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

const RadioButton = ({ options = [], horizontal = false, onChangeSelect, selected }) => {

    return (

        <View>
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
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',


    },
    outLineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#c3320b',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
    },

    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,

        backgroundColor: '#be6b55'


    },

    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 2,


    }
})


export default RadioButton;