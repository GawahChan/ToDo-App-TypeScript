import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';

interface AppProps {
}

interface AppState {
  todosInput: string;
  todos: Array<object>;
}

class App extends React.Component<AppProps, AppState> {
  constructor(AppProps: any) {
    super(AppProps);
    this.state = {
      todosInput: '',
      todos: [
        {id: 0, title:'Take trash out', done: false},
        {id: 1, title:'Cook Dinner', done: false},
        {id: 2, title:'Learn to Code', done: false}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header Title="ToDo App" />
        <InputBar 
          todosInput={this.state.todosInput}
        />
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
