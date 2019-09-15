import TaskCreator from '../TaskCreator';
import React from 'react';

describe('Component: TaskCreator', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TaskCreator
                saveTask={() => { }}
                redirectHome={() => {}}
            />
        );

    });

    it('Should match snapshot', () => {

        expect(wrapper).toMatchSnapshot();
    });

    it('should remove image on remoceImage call', () => {
        const imageFiles = [
            { type: 'image/jpeg', name: '0.jpg' },
            { type: 'image/jpeg', name: '1.jpg' },
            { type: 'image/jpeg', name: '2.jpg' },
            { type: 'image/jpeg', name: '3.jpg' },
            { type: 'image/jpeg', name: '4.jpg' },
            { type: 'image/jpeg', name: '5.jpg' },
        ];
        const removeImageIndex = 2;
        const instance = wrapper.instance();
        instance.onImageAdd(imageFiles);
        instance.removeImage(removeImageIndex);

        imageFiles.splice(removeImageIndex, 1);

        expect(instance.state.imageFiles).toEqual(imageFiles);
    });

    it('should remove Invalid image files', () => {
        const imageFiles = [
            { type: 'image/jpeg', name: '0.jpg' },
            { type: 'image/jpeg', name: '1.jpg' },
            { type: 'image/jpeg', name: '2.jpg' },
            { type: 'pdf', name: '3.pdf' },
            { type: 'image/jpeg', name: '4.jpg' },
            { type: 'image/jpeg', name: '5.jpg' },
        ];
        const invalidImageIndex = 3;
        const instance = wrapper.instance();

        instance.onImageAdd(imageFiles);
        imageFiles.splice(invalidImageIndex, 1);
        expect(instance.state.imageFiles).toEqual(imageFiles);
    });
});