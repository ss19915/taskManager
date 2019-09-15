import React from 'react';
import { Card, TextField, Fab, Typography, Grid, ArrowBackIcon } from '@task-manager/theme';
import T from 'prop-types';
import AddImageButton from './AddImageButton';
import ImageViewer from './ImageViewer';

const TaskCreatorForm = (props) => {
    const {
        createTask,
        onImageAdd,
        onNameChange,
        onDescriptionChange,
        imageFiles,
        removeImage,
        isCreateDisabled,
        goBack
    } = props;

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
                title='Task Creator'
                avatar={
                    <Fab onClick={goBack}><ArrowBackIcon/></Fab>
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
                        Create Task
                    </Fab>
                }
            />
            <Card.Content>
                <Typography>Name*</Typography>
                <TextField
                    fullWidth
                    onChange={({ target: { value } }) => onNameChange(value)}
                />
                <Typography>Description</Typography>
                <TextField fullWidth onChange={({ target: { value } }) => onDescriptionChange(value)} multiline />
                <MultipleImageViewer />
            </Card.Content>
            <Card.Actions>
                <AddImageButton onChange={onImageAdd} />
            </Card.Actions>
        </Card>
    );
};

TaskCreatorForm.propTypes = {
    createTask: T.func.isRequired,
    imageFiles: T.arrayOf(T.object),
    isCreateDisabled: T.bool.isRequired,
    onDescriptionChange: T.func.isRequired,
    onImageAdd: T.func.isRequired,
    onNameChange: T.func.isRequired,
    removeImage: T.func.isRequired,
};

export default TaskCreatorForm