import React from 'react';
import { Card, TextField, Fab, Typography, Grid, ArrowBackIcon } from '@task-manager/theme';
import T from 'prop-types';
import AddImageButton from './AddImageButton';
import ImageViewer from './ImageViewer';
import constants from '../../constants';

const TaskCreatorEditorForm = (props) => {
    const {
        createTask,
        onImageAdd,
        onNameChange,
        onDescriptionChange,
        imageFiles,
        removeImage,
        isCreateDisabled,
        goBack,
        mode,
        name,
        description,
    } = props;

    const EDIT_MODE = constants.VIEW_MODE.EDIT;

    const MultipleImageViewer = () => (
        <Grid spacing={1} container>
            {imageFiles.map((imageFile, index) => (
                <Grid item xl={1} lg={2} md={2} sm={3} xs={6} key={index}>
                    <ImageViewer
                        imageFile={imageFile}
                        name={index}
                        removeImage={removeImage}
                    />
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Card>
            <Card.Header
                title={mode === EDIT_MODE ? 'Task Editor' : 'Task Creator'}
                avatar={
                    <Fab onClick={goBack}><ArrowBackIcon /></Fab>
                }
                titleTypographyProps={{
                    variant: 'h5'
                }}
                action={
                    <Fab
                        color='primary'
                        variant='extended'
                        onClick={createTask}
                        disabled={isCreateDisabled}
                    >
                        {mode === EDIT_MODE ? 'Update Task' : 'Create Task'}
                    </Fab>
                }
            />
            <Card.Content>
                <Typography>Name*</Typography>
                <TextField
                    value={name}
                    fullWidth
                    onChange={({ target: { value } }) => onNameChange(value)}
                />
                <Typography>Description</Typography>
                <TextField
                    fullWidth
                    onChange={({ target: { value } }) => onDescriptionChange(value)}
                    multiline
                    value={description}
                />
                <MultipleImageViewer />
            </Card.Content>
            <Card.Actions>
                <AddImageButton onChange={onImageAdd} />
            </Card.Actions>
        </Card>
    );
};

TaskCreatorEditorForm.propTypes = {
    createTask: T.func.isRequired,
    imageFiles: T.arrayOf(T.object),
    isCreateDisabled: T.bool.isRequired,
    onDescriptionChange: T.func.isRequired,
    onImageAdd: T.func.isRequired,
    onNameChange: T.func.isRequired,
    removeImage: T.func.isRequired,
};

export default TaskCreatorEditorForm