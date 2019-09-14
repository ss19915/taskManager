import AddImageButton from '../AddImageButton';
import React from 'react';

describe('Component: AddImageButton', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<AddImageButton onChange={() => { }} />);

        expect(wrapper).toMatchSnapshot();
    });
});