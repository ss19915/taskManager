import React from 'react';
import { Card, IconButton, CloseIcon } from '@task-manager/theme';
import T from 'prop-types';
import utils from '../../utils'

const getImageFromPath = (path) => URL.createObjectURL(path);

const ImageViewer = (props) => {
    const { imageFile, removeImage, name } = props;
    const maxTitleLenght = 10;

    return (
        <React.Fragment>
        <Card>
            <Card.Header
                    action={
                        <IconButton onClick={() => removeImage(name)}>
                            <CloseIcon />
                        </IconButton>
                    }
                    title={utils.limitCharacter(imageFile.name, maxTitleLenght)}
                />
            <Card.ActionArea>
                <Card.Media>
                    <img width='100%' src={getImageFromPath(imageFile)} />
                </Card.Media>
            </Card.ActionArea>
        </Card>
        </React.Fragment>
    );
};

ImageViewer.propTypes = {
    imageFile: T.object.isRequired,
    name: T.any.isRequired,
    removeImage: T.func.isRequired,
};


export default ImageViewer;