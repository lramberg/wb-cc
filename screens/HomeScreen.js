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
    }

    render() {
        return (
            <View style={styles.screen}>
                <ToggleButton toggleMenu={this.toggleMenu}/>
                <Menu navigation={this.props.navigation} menuOpen={this.state.menuOpen}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
})

export default HomeScreen;