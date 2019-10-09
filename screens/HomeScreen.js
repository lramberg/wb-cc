import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import ToggleButton from '../components/ToggleButton/ToggleButton';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ToggleButton />
                <Text>Home Screen</Text>
                <Button 
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;