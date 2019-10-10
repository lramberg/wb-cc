import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Animated, 
    Linking, 
} from 'react-native';

import ToggleButton from '../components/ToggleButton/ToggleButton';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        animatedValue: new Animated.Value(0)
    }

    animate = () => {
        Animated.timing(this.state.animatedValue,
            {
                toValue: 1,
                duration: 1000
            }
        ).start();
    };

    render() {
        let { animatedValue } = this.state;
        return (
            <View style={styles.screen}>
                <ToggleButton animateMenu={this.animate}/>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [600, 95]
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