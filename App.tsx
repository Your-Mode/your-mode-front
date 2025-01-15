import React from 'react';
import { View } from "react-native";
import WebView from "react-native-webview";
import { StyleSheet } from "react-native";

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://your-mode-react.vercel.app/' }}
        style={styles.webview} />
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
