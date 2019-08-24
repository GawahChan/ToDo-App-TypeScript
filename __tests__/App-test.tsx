import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
  it('Display "Hello World"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Text').contains('Hello World!')).toBe(true)
  });
})