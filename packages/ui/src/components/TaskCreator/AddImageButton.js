import React from 'react';
import { Fab, AddAPhotoIcon } from '@task-manager/theme';
import T from 'prop-types';

const AddImageButton = (props) => {
    const { onChange } = props;
    const inputRef = React.createRef();

    const openFileChooser = () => { inputRef.current.click() };
    const getObjectValues = (object) => Object.values(object);
    return (
        <React.Fragment>
            <input
                hidden multiple
                ref={inputRef}
                type='file'
                onChange={({ target }) => onChange(getObjectValues(target.files))}
            />
            <Fab onClick={openFileChooser}>
                <AddAPhotoIcon />
            </Fab>
        </React.Fragment>
    );
};

AddImageButton.propTypes = {
    onChange: T.func.isRequired,
};

export default AddImageButton;