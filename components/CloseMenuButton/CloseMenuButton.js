import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const CloseMenuButton = (props) => {
    return (
        <TouchableOpacity onPress={props.closeMenu} >
            <View style={styles.buttonWrapper} >
                <View style={styles.iconLineOne}></View>
                <View style={styles.iconLineTwo}></View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 30,
        top: '120%',
        right: '-10%'
    },
    iconLineOne: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2,
        transform: [{rotate: '45deg'}]
    },
    iconLineTwo: {
        backgroundColor: "#c4ffee",
        width: 30,
        height: 2,
        transform: [{rotate: '-45deg'}]
    }
})

export default CloseMenuButton;