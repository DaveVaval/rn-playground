import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import React from 'react';

export default function index() {
  const injectedJavascript = `(function() {
    window.postMessage = function(data) {
      window.ReactNativeWebView.postMessage(data);
    };
  })()`
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://870a-166-62-183-107.ngrok-free.app' }}
      javaScriptEnabled={true}
      injectedJavaScript={injectedJavascript}
      onMessage={(event) => {
        console.log(event.nativeEvent.data)
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});