import React from 'react';
import { TaskCreatorEditorForm } from '../TaskCreatorEditorForm';
import _ from 'lodash';
import constants from '../../constants';
import T from 'prop-types';
import { TaskLoader } from '../TaskCreatorEditorForm';
import 'firebase/database';
import { database, auth } from 'firebase/app';

const { API_STATUS } = constants;

class TaskCreator extends React.PureComponent {
    static propTypes = {
        redirectHome: T.func.isRequired,
    };

    state = {
        imageFiles: [],
        isCreateDisabled: true,
        createStatus: API_STATUS.INITIAL,
        taskName: '',
        taskDescription: '',
    };

    createTask = (task) => {
        const user = auth().currentUser;
        const taskPath = `tasks/${user.uid}/`

        return database().ref().child(taskPath).push(task);
    }

    onCreateTask = () => {
        const { taskName, taskDescription } = this.state;
        const payload = { name: taskName };

        if (taskDescription) {
            payload.description = taskDescription;
        }
        this.setState({ createStatus: API_STATUS.SENT });
        this.createTask(payload).then(() => {
            this.setState({ createStatus: API_STATUS.RECEIVED });
        }).catch(({ code }) => this.setState({ createStatus: API_STATUS.ERROR, error: code }));
    };

    retry = () => {
        this.setState({ error: null });
        this.onCreateTask();
    };

    createNewTask = () => this.setState({
        createStatus: API_STATUS.INITIAL,
        taskName: '',
        taskDescription: '',
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
        const { imageFiles, isCreateDisabled, createStatus, error, taskName, taskDescription } = this.state;
        const { redirectHome } = this.props;

        return (
            <React.Fragment>
                <TaskCreatorEditorForm
                    onDescriptionChange={this.onDescriptionChange}
                    onImageAdd={this.onImageAdd}
                    onNameChange={this.onNameChange}
                    createTask={this.onCreateTask}
                    removeImage={this.removeImage}
                    isCreateDisabled={isCreateDisabled}
                    goBack={redirectHome}
                    name={taskName}
                    imageFiles={imageFiles}
                    description={taskDescription}
                />
                <TaskLoader
                    retry={this.retry}
                    cancelCreateTask={this.cancelCreateTask}
                    createNewTask={this.createNewTask}
                    loading={createStatus}
                    error={error}
                    redirectHome={redirectHome}
                />
            </React.Fragment>
        );
    }
}

export default TaskCreator;