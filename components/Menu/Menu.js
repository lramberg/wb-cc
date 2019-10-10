import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

const Menu = (props) => {
    return (
        <View style={props.menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Text  style={styles.text} onPress={() => props.navigation.navigate('Home')}>Home</Text>
            <Text  style={styles.text} onPress={() => Linking.openURL('https://wildebee.st/')}>Wildebeest Website</Text>
            <Text  style={styles.text} onPress={() => props.navigation.navigate('Web')}>My Favorite Thing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    menuOpen: {
        height: '50%',
        width: '70%',
        backgroundColor: '#d6d3db',
        zIndex: 100,
        top: '15%',
        right: -100,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    menuClosed: {
        right: -350,
    },
    text: {
        fontSize: 20,
        color: 'darkblue',
    }
})

export default Menu;