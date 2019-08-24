import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

interface InputBarProps {
    todosInput: string;
}

export const InputBar: React.FC<InputBarProps> = (props) => {
    return (
        <View style={styles.InputContainer}>
            <TextInput 
                style={styles.Input}
                value= {props.todosInput}
                placeholder='Enter your todos to the list here!'
            />
            <TouchableOpacity style={styles.AddButton}>
                <Text >Add to list!</Text>
            </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    Input: {
        backgroundColor: '#DDDDDD',
        flex: 1,
    },
    AddButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    }
})

export default InputBar;