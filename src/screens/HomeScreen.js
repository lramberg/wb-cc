import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Animated, 
    Linking, 
} from 'react-native';

import OpenMenuButton from '../components/OpenMenuButton/OpenMenuButton';
import CloseMenuButton from '../components/CloseMenuButton/CloseMenuButton';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        menuOpen: false,
        animatedValue: new Animated.Value(0)
    }

    openMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
        Animated.timing(this.state.animatedValue,
            {
                toValue: 1,
                duration: 1000
            }
            ).start();
    };
        
    closeMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
        Animated.timing(this.state.animatedValue,
        {
            toValue: 0,
            duration: 1000
        }
        ).start();
    };

    render() {
        let { animatedValue } = this.state;
        var btn;
        if (this.state.menuOpen) {
            btn = <CloseMenuButton animatedValue={this.state.animatedValue} closeMenu={this.closeMenu}/>
        } else {
            btn = <OpenMenuButton animatedValue={this.state.animatedValue} openMenu={this.openMenu}/>
        }

        return (
            <View style={styles.screen}>
                { btn }
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [400, 100]
                                })
                            }
                        ],
                        height: '50%',
                        width: '70%',
                        top: '15%',
                        backgroundColor: '#d6d3db',
                        zIndex: 100,
                        padding: 20,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        borderRadius: 5
                    }}
                >
                    <Text  style={styles.text} onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
                    <Text  style={styles.text} onPress={() => Linking.openURL('https://wildebee.st/')}>Wildebeest Website</Text>
                    <Text  style={styles.text} onPress={() => this.props.navigation.navigate('Web')}>My Favorite Thing</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1b013b'
    },
    text: {
        fontSize: 20,
        color: 'darkblue',
    }
})

export default HomeScreen;