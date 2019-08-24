import 'react-native';
import React from 'React';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Header from '../components/Header';

describe('<Header /> component', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(<Header Title="ToDo App" />);
        expect(rendered).toBeTruthy();
    });
    it('renders with correct header title', () => {
        const wrapper = shallow(<Header Title="ToDo App" />);
        expect(wrapper.find('Text').contains("ToDo App")).toBe(true);
    });
});

