import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <WebView
          source={{ uri: 'https://your-mode-react.vercel.app/' }}
          style={styles.webview}
          contentInsetAdjustmentBehavior="automatic"
          keyboardDisplayRequiresUserAction={false}
          scrollEnabled={true}
          hideKeyboardAccessoryView={true}
          allowsInlineMediaPlayback={true}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
