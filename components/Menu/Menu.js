import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

const Menu = (props) => {
    return (
        <View style={props.menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
            <Text onPress={() => Linking.openURL('https://wildebee.st/')}>Wildebeest Website</Text>
            <Text onPress={() => props.navigation.navigate('Web')}>My Favorite Thing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    menuOpen: {
        height: '50%',
        width: '70%',
        backgroundColor: 'gray',
        zIndex: 100,
        top: '15%',
        right: -150,
        padding: 20
    },
    menuClosed: {
        height: '50%',
        width: '70%',
        backgroundColor: 'gray',
        zIndex: 100,
        top: '15%',
        right: -350,
        padding: 20
    }
})

export default Menu;