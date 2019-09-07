import React from 'react';
import Home from '../Home';

describe('Component: Home', () => {
    it('Shallow Snapshot test', () => {
        const wrapper = shallow(<Home/>);

        expect(wrapper).toMatchSnapshot();
    });
})