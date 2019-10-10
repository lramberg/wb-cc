import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
    render() {
        return (
            <WebView 
                style={{ flex: 1 }}
                source={{ uri: 'https://youtu.be/aRxgmYDmwMA?t=63'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        );
    }
}

export default MyWeb;