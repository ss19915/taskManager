import React from 'react';
import TaskCreatorForm from './TaskCreatorForm';
import _ from 'lodash';

class TaskCreator extends React.PureComponent {
    state = {
        imageFiles: [],
    };

    createTask = () => { };

    onDescriptionChange = (taskDescription) => this.setState({ taskDescription });

    removeImage = (index) => {
        const imageFiles = _.cloneDeep(this.state.imageFiles);

        imageFiles.splice(index, 1);
        this.setState({ imageFiles });
    };

    removeInvalidImageFiles = (imageFiles) => {
        const validImageFiles = [];

        imageFiles.map((imageFile) => {
            if (imageFile.type === 'image/jpeg') {
                validImageFiles.push(imageFile);
            }
        });
        return (validImageFiles);
    };

    onImageAdd = (filePaths) => {
        const imageFiles = this.removeInvalidImageFiles(filePaths);;

        this.setState((prevState) => ({
            imageFiles: [...prevState.imageFiles, ...imageFiles],
        }));
    };

    onNameChange = (taskName) => this.setState({ taskName });

    render() {
        const { imageFiles } = this.state;

        return (
            <TaskCreatorForm
                onDescriptionChange={this.onDescriptionChange}
                onImageAdd={this.onImageAdd}
                onNameChange={this.onNameChange}
                createTask={this.createTask}
                imageFiles={imageFiles}
                removeImage={this.removeImage}
            />
        );
    }
}

export default TaskCreator;