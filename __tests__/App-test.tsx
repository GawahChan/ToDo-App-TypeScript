import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import Header from '../components/Header';
import InputBar from '../components/InputBar';

import { shallow } from 'enzyme';

describe('<App /> Component', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });

  it('App creates state "todosInput" and "todos"', () => {
    expect(wrapper.state('todosInput')).toBe('')
    expect(wrapper.state('todos')).toEqual([
      {id: 0, title:'Take trash out', done: false},
      {id: 1, title:'Cook Dinner', done: false},
      {id: 2, title:'Learn to Code', done: false}
    ]);
  });

  it('renders <Header /> with props "Title"', () => {
    expect(wrapper.contains(<Header Title="ToDo App" />)).toBe(true);
  });

  it('renders <InputBar /> with props "todosInput"', () => {
    expect(wrapper.contains(<InputBar todosInput={wrapper.state('todosInput')}/>)).toBe(true);
  });
});