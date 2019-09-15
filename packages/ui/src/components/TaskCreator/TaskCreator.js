import React from 'react';
import TaskCreatorForm from './TaskCreatorForm';
import _ from 'lodash';
import { createTask as createTaskEndpoint } from '@task-manager/api';
import { API_STATUS } from '../../constants';
import T from 'prop-types';
import TaskLoader from './TaskLoader';

class TaskCreator extends React.PureComponent {
    static propTypes = {
        saveTask: T.func.isRequired,
        redirectHome: T.func.isRequired,
    };

    state = {
        imageFiles: [],
        isCreateDisabled: true,
        createStatus: API_STATUS.INITIAL,
    };

    onCreateTask = () => {
        const { saveTask } = this.props;
        const { taskName, taskDescription } = this.state;
        const payload = { name: taskName };

        if (taskDescription) {
            payload.description = taskDescription;
        }
        this.setState({ createStatus: API_STATUS.SENT });
        createTaskEndpoint(payload).then(({ data }) => {
            this.setState({ createStatus: API_STATUS.RECEIVED });
            saveTask(data);
        }).catch((error) => this.setState({ createStatus: API_STATUS.ERROR, error }));
    };

    retry = () => {
        this.setState({ error: null });
        this.onCreateTask();
    };

    createNewTask = () => this.setState({
        createStatus: API_STATUS.INITIAL,
        taskName: null,
        taskDescription: null,
        error: null,
    });

    cancelCreateTask = () => this.setState({
        createStatus: API_STATUS.INITIAL,
        error: null,
    });

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

    onNameChange = (taskName) => {
        this.setState((prevState) => {
            const newState = { taskName };

            if (prevState.isCreateDisabled && !_.isEmpty(taskName)) {
                newState.isCreateDisabled = false;
            }
            else if (!prevState.isCreateDisabled && _.isEmpty(taskName)) {
                newState.isCreateDisabled = true;
            }

            return (newState);
        })
    };

    render() {
        const { imageFiles, isCreateDisabled, createStatus, error } = this.state;
        const { redirectHome } = this.props;

        return (
            <React.Fragment>
                <TaskCreatorForm
                    onDescriptionChange={this.onDescriptionChange}
                    onImageAdd={this.onImageAdd}
                    onNameChange={this.onNameChange}
                    createTask={this.onCreateTask}
                    imageFiles={imageFiles}
                    removeImage={this.removeImage}
                    isCreateDisabled={isCreateDisabled}
                    goBack={redirectHome}
                />
                <TaskLoader
                    loading={createStatus}
                    retry={this.retry}
                    error={error}
                    createNewTask={this.createNewTask}
                    redirectHome={redirectHome}
                    cancelCreateTask={this.cancelCreateTask}
                />
            </React.Fragment>
        );
    }
}

export default TaskCreator;