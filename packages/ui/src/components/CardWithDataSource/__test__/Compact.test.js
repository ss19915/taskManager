import React from 'react';
import Compact from '../Compact';

describe('Component: Compact', () => {
    it('Should render correctly with no child', () => {
        const wrapper = shallow(<Compact />);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly with childs', () => {
        const A = () => (<p>A</p>);

        const wrapper = shallow(<Compact><A /></Compact>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should be compack when prop compack is passed', () => {
        const A = () => (
            <div>
                B
                <p>A</p>
            </div>
        );

        const wrapper = render(
            <Compact compact>
                <A />
            </Compact>
        );

        expect(wrapper.html()).toEqual(render(<A />).html());
    });
});