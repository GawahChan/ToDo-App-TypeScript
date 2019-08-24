import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputBar from '../components/InputBar';

import { shallow } from 'enzyme';

describe('<InputBar /> Component', () => {
    const wrapper = shallow(<InputBar />);

    it('renders correctly', () => {
        const rendered = renderer.create(<InputBar />).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('renders <TextInput />', () => {
        expect(wrapper.find('TextInput')).toHaveLength(1);
    })
    it('renders <TouchableOpacity />', () => {
        expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    })
})