import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// Set up Redux
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>LET'S BUILD CHIDINMA AMUTA</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
