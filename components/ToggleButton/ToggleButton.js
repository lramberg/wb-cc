import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const ToggleButton = (props) => {
    return (
        <TouchableOpacity onPress={props.animateMenu} >
            <View style={styles.buttonWrapper} >
                <View style={styles.iconLine}></View>
                <View style={styles.iconLine}></View>
                <View style={styles.iconLine}></View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 30,
        flexDirection: "column",
        justifyContent: "space-around",
        top: '120%',
        right: '-80%'
    },
    iconLine: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2
    }
})

export default ToggleButton;