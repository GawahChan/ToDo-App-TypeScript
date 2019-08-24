import 'react-native';
import React from 'React';
import renderer from 'react-test-renderer';

import Header from '../components/Header';

import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adaptor });

describe('<Header /> component', () => {
    it('renders correctly', () => {
        renderer.create(<Header Title="ToDo App" />);
    });
    it('renders with correct header title', () => {
        const wrapper = shallow(<Header Title="ToDo App" />);
        expect(wrapper.find('Text').contains("ToDo App")).toBe(true);
    });
});

