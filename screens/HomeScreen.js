import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import ToggleButton from '../components/ToggleButton/ToggleButton';
import Menu from '../components/Menu/Menu';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ToggleButton />
                <Menu navigation={this.props.navigation} />
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