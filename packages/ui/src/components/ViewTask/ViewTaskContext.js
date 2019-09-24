import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ViewTask from './ViewTask';
import constants from '../../constants';
import ViewTaskHeaderMenu from './ViewTaskHeaderMenu';
import actions from '../../actions';
import { auth, database } from 'firebase';

class ViewTaskContext extends React.PureComponent {

    state = {
        anchorEl: null,
    };

    updateTaskById = (id, payload) => {
        const path = `tasks/${auth().currentUser.uid}/${id}`;
        return database().ref(path).update(payload);
    };

    deleteTaskById = (id) => {
        const path = `tasks/${auth().currentUser.uid}/${id}`;

        return database().ref(path).remove();
    };

    showCardHeaderMenu = ({ currentTarget }) => this.setState({ anchorEl: currentTarget });

    onClose = () => this.setState({ anchorEl: null });

    deleteTask = () => {
        const { task, taskDeleted, taskIndex } = this.props;
        const { id } = task;

        this.onClose();
        this.setState({ isDeleteDisabled: true });
        this.deleteTaskById(id).then(() => {
            taskDeleted(taskIndex);
            this.redirectHome();
        }).catch(() => {
            this.setState({ isDeleteDisabled: false });
        });
    };

    editTask = () => {
        const { setActiveTask, history, taskIndex } = this.props;

        setActiveTask(taskIndex);
        history.push(constants.ROUTES.EDIT_TASK);
    };

    markAsComplete = () => {
        const { task, updateTask, taskIndex } = this.props;
        const { id, completed } = task;
        const payload = { completed: !completed };

        this.setState({ isCompleteCheckBoxDisabled: true });
        this.updateTaskById(id, payload).then(() => {
            this.setState({ isCompleteCheckBoxDisabled: false });
            updateTask(taskIndex, payload);
        }).catch(() => {
            this.setState({ isCompleteCheckBoxDisabled: false });
        });
    };

    redirectHome = () => {
        const { history } = this.props;

        history.push(constants.ROUTES.DASHBOARD);
    }

    render() {
        const { task } = this.props;
        const { anchorEl, isCompleteCheckBoxDisabled, isDeleteDisabled } = this.state;

        if (task === null) {
            this.redirectHome();
        }

        return (
            <React.Fragment>
                <ViewTaskHeaderMenu
                    anchorEl={anchorEl}
                    onClose={this.onClose}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    isDeleteDisabled={isDeleteDisabled}
                />
                <ViewTask
                    {...task}
                    showCardHeaderMenu={this.showCardHeaderMenu}
                    markAsComplete={this.markAsComplete}
                    {...task}
                    isCompleteCheckBoxDisabled={isCompleteCheckBoxDisabled}
                    goBack={this.redirectHome}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    task: state.allTasks === null ? null : state.allTasks[state.activeTask],
    taskIndex: state.activeTask,
});

const mapDispatchToProps = (dispatch) => ({
    taskDeleted: (taskIndex) => dispatch(actions.deleteTask(taskIndex)),
    updateTask: (taskIndex, task) => dispatch(actions.updateTask(taskIndex, task)),
    setActiveTask: (activeTask) => dispatch(actions.setActiveTask(activeTask)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewTaskContext));