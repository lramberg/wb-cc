import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
    render() {
        return (
            <WebView 
                style={{ flex: 1 }}
                source={{ uri: 'https://www.youtube.com/watch?v=aRxgmYDmwMA'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        );
    }
}

export default MyWeb;