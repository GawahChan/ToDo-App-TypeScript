import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

interface AppProps {

}

interface AppState {
  todosInput: string;
  todos: Array<object>;

}

class App extends React.Component<AppProps, AppState> {
  constructor(AppProps: any) {
    super(AppProps);

  }

  render() {
    return (
      <View style={styles.container}>
        <Header Title="ToDo App" />
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

export default App;
