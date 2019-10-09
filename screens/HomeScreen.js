import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Drawer from 'react-native-drawer';

import ToggleButton from '../components/ToggleButton/ToggleButton';
import Menu from '../components/Menu/Menu';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.screen}>
                <ToggleButton />
                <Menu />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})

export default HomeScreen;