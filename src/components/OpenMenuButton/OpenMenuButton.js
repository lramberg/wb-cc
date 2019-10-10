import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const OpenMenuButton = (props) => {
    return (
        <TouchableOpacity onPress={props.openMenu} >
            <View style={styles.buttonWrapper} >
                <Animated.View
                    style={{
                        transform: [
                            {
                                rotateX: props.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg']
                                })
                            }
                        ]
                    }}
                >
                    <View style={styles.iconLine}></View>
                    <View style={styles.iconLine}></View>
                    <View style={styles.iconLine}></View>
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
        flexDirection: "column",
        justifyContent: "space-around",
    },
    iconLine: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2,
        marginVertical: 5
    }
})

export default OpenMenuButton;