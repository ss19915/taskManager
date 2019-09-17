import React from 'react';
import { TaskCreatorEditorForm } from '../TaskCreatorEditorForm';
import _ from 'lodash';
import { updateTaskById } from '@task-manager/api';
import constants from '../../constants';
import T from 'prop-types';
import { TaskLoader } from '../TaskCreatorEditorForm';

const { API_STATUS, VIEW_MODE, ROUTES } = constants;

class TaskEditor extends React.PureComponent {
    static propTypes = {
        updateTask: T.func.isRequired,
        redirectHome: T.func.isRequired,
    };

    constructor(props) {
        super(props);
        const { task } = props;

        this.state = {
            taskName: task.name,
            taskDescription: task.description,
            imageFiles: [],
            isCreateDisabled: true,
            createStatus: API_STATUS.INITIAL,
        };
    }

    onUpdateTask = () => {
        const { updateTask, history, task, taskIndex } = this.props;
        const { taskName, taskDescription } = this.state;
        const payload = { name: taskName, description: taskDescription };

        this.setState({ createStatus: API_STATUS.SENT });
        updateTaskById(task._id, payload).then(() => {
            updateTask(taskIndex, payload);
            history.push(ROUTES.VIEW_TASK);
        }).catch((error) => this.setState({ createStatus: API_STATUS.ERROR, error }));
    };

    retry = () => {
        this.setState({ error: null });
        this.onUpdateTask();
    };

    cancelCreateTask = () => this.setState({
        createStatus: API_STATUS.INITIAL,
        error: null,
    });

    onDescriptionChange = (taskDescription) => this.setState((prevState) => {
        if (prevState.isCreateDisabled && !_.isEmpty(prevState.taskName)) {
            return ({ taskDescription, isCreateDisabled: false });
        }
        return ({ taskDescription });
    });

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
        const { redirectHome, task } = this.props;

        return (
            <React.Fragment>
                <TaskCreatorEditorForm
                    {...task}
                    mode={VIEW_MODE.EDIT}
                    onDescriptionChange={this.onDescriptionChange}
                    onImageAdd={this.onImageAdd}
                    onNameChange={this.onNameChange}
                    createTask={this.onUpdateTask}
                    imageFiles={imageFiles}
                    removeImage={this.removeImage}
                    isCreateDisabled={isCreateDisabled}
                    goBack={redirectHome}
                />
                <TaskLoader
                    loading={createStatus}
                    retry={this.retry}
                    error={error}
                    redirectHome={redirectHome}
                    cancelCreateTask={this.cancelCreateTask}
                />
            </React.Fragment>
        );
    }
}

export default TaskEditor;