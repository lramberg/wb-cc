import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const CloseMenuButton = (props) => {
    return (
        <TouchableOpacity onPress={props.closeMenu} >
            <View style={styles.buttonWrapper} >
                <Animated.View
                    style={{
                        transform: [
                            {
                                rotateY: props.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg']
                                })
                            }
                        ]
                    }}
                >
                    <View style={styles.iconLineOne}></View>
                    <View style={styles.iconLineTwo}></View>
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 30,
        width: 30,
        top: '120%',
        right: '-80%',
    },
    iconLineOne: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2,
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        top: 15
    },
    iconLineTwo: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2,
        transform: [{rotate: '-45deg'}],
        position: 'absolute',
        top: 15
    }
})

export default CloseMenuButton;