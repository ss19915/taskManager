import React from 'react';
import TaskCard from './TaskCard';
import TaskCardHeaderMenu from './TaskCardHeaderMenu';
import { deleteTaskById, updateTaskById } from '@task-manager/api';
import { connect } from 'react-redux';
import actions from '../../actions';
import constants from '../../constants';
import { withRouter } from 'react-router-dom';

class TaskCardContext extends React.Component {
    state = {
        anchorEl: null,
    };

    showCardHeaderMenu = ({ currentTarget }) => this.setState({ anchorEl: currentTarget });

    onClose = () => this.setState({ anchorEl: null });

    deleteTask = () => {
        const { task, taskDeleted, taskIndex } = this.props;
        const { _id: id } = task;

        this.onClose();
        this.setState({ isDeleteDisabled: true });
        deleteTaskById(id).then(() => {
            taskDeleted(taskIndex);
        }).catch(() => {
            this.setState({ isDeleteDisabled: false });
        });
    };

    viewTask = () => {
        const { setActiveTask, history, taskIndex } = this.props;

        setActiveTask(taskIndex);
        history.push(constants.ROUTES.VIEW_TASK);
    };

    editTask = () => {
        const { setActiveTask, history, taskIndex } = this.props;
        
        setActiveTask(taskIndex);
        history.push(constants.ROUTES.EDIT_TASK);
    };
    
    markAsComplete = () => {
        const { task, updateTask, taskIndex } = this.props;
        const { _id: id, completed } = task;
        const payload = { completed: !completed };

        this.setState({ isCompleteCheckBoxDisabled: true });
        updateTaskById(id, payload).then(() => {
            this.setState({ isCompleteCheckBoxDisabled: false });
            updateTask(taskIndex, payload);
        }).catch(() => {
            this.setState({ isCompleteCheckBoxDisabled: false });
        });
    };


    render() {
        const { anchorEl, isCompleteCheckBoxDisabled, isDeleteDisabled } = this.state;
        const { task } = this.props;

        return (
            <React.Fragment>
                <TaskCardHeaderMenu
                    anchorEl={anchorEl}
                    onClose={this.onClose}
                    viewTask={this.viewTask}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    isDeleteDisabled={isDeleteDisabled}
                />
                <TaskCard
                    showCardHeaderMenu={this.showCardHeaderMenu}
                    markAsComplete={this.markAsComplete}
                    {...task}
                    isCompleteCheckBoxDisabled={isCompleteCheckBoxDisabled}
                    viewTask={this.viewTask}
                />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    taskDeleted: (taskIndex) => dispatch(actions.deleteTask(taskIndex)),
    updateTask: (taskIndex, task) => dispatch(actions.updateTask(taskIndex, task)),
    setActiveTask: (activeTask) => dispatch(actions.setActiveTask(activeTask)),
});

export default connect(null, mapDispatchToProps)(withRouter(TaskCardContext));