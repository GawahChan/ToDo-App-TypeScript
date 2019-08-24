import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import Header from '../components/Header';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
  it('contains <Header />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header Title="ToDo App" />)).toBe(true);
  });
});