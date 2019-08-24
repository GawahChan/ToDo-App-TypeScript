import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    Title: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>
                {props.Title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#111111',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#DDDDDD',
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Header;
