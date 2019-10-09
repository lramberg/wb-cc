import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

const Menu = (props) => {
    return (
        <View style={styles.menu}>
            <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
            <Text onPress={() => Linking.openURL('https://wildebee.st/')}>Wildebeest Website</Text>
            <Text onPress={() => Linking.openURL('https://www.youtube.com/watch?v=aRxgmYDmwMA')}>My Favorite Thing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: '50%',
        width: '50%',
        backgroundColor: 'gray',
    }
})

export default Menu;