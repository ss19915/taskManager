import React from 'react';
import ErrorMenu from '../ErrorMenu';
import { ErrorMenuLabels } from '../constants';
import { Button } from '@react-web-app/theme';

describe('Component: ErrorMenu', () => {
    it('Should render correctly with no child', () => {
        const wrapper = shallow(<ErrorMenu/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should call retry when clicked on Retry button', () => {
        const retry = jest.fn();

        const findRetryButton = (wrapper) => {
            let button;
            wrapper.find(Button).map( (Button) => {
                if(Button.props().children === ErrorMenuLabels.RETRY){
                    button = Button;
                }
            });

            return button;
        };
        
        const wrapper = shallow(<ErrorMenu retry={retry} />);
        
        findRetryButton(wrapper).props().onClick();
        expect(retry).toBeCalledTimes(1);
    });
});