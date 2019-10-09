import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

import ToggleButton from '../components/ToggleButton/ToggleButton';
import Menu from '../components/Menu/Menu';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = (props) => {
        this.setState({ menuOpen: !this.state.menuOpen });
        console.log('toggle', this.state.menuOpen);
        console.log(this.props.styles);
    }

    render() {
        return (
            <View style={styles.screen}>
                <ToggleButton toggleMenu={this.toggleMenu}/>
                <View style={this.state.menuOpen ? styles.menuOpen : styles.menuClosed}>
                    <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
                    <Text onPress={() => Linking.openURL('https://wildebee.st/')}>Wildebeest Website</Text>
                    <Text onPress={() => Linking.openURL('https://www.youtube.com/watch?v=aRxgmYDmwMA')}>My Favorite Thing</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
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

export default HomeScreen;