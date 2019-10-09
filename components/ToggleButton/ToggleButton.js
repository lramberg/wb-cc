import React from 'react';
import { View, StyleSheet } from 'react-native';

const ToggleButton = (props) => {
    return (
        <View style={styles.buttonWrapper}>
            <View style={styles.iconLine}></View>
            <View style={styles.iconLine}></View>
            <View style={styles.iconLine}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 30,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    iconLine: {
        backgroundColor: "blue",
        width: 30,
        height: 2
    }
})

export default ToggleButton;