import React from 'react';
import ShowChildren from '../ShowChildren';

describe('Component: ShowChildren', () => {
    it('Should render correctly with no child', () => {
        const wrapper = shallow(<ShowChildren/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly with one child', () => {
        const A = () => (<p>A</p>)

        const wrapper = shallow(
            <ShowChildren>
                <A/>
            </ShowChildren>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly with more than one child', () => {
        const A = () => (<p>A</p>)
        const B = () => (<p>B</p>)

        const wrapper = shallow(
            <ShowChildren>
                <A/>
                <B/>
            </ShowChildren>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('Should pass props with one child', () => {
        const A = () => (<p>A</p>)
        const childrenProps = {a:1};

        const wrapper = shallow(
            <ShowChildren childrenProps={childrenProps}>
                <A/>
            </ShowChildren>
        );

        expect(wrapper.find('A').props()).toEqual(childrenProps);
    });

    it('Should pass props with all childs', () => {
        const A = () => (<p>A</p>)
        const B = () => (<p>B</p>)
        const childrenProps = {a:1};

        const wrapper = shallow(
            <ShowChildren childrenProps={childrenProps}>
                <A/>
                <B/>
            </ShowChildren>
        );

        expect(wrapper.find('A').props()).toEqual(childrenProps);
        expect(wrapper.find('B').props()).toEqual(childrenProps);
    });
});