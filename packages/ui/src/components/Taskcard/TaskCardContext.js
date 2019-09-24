import React from 'react';
import TaskCard from './TaskCard';
import TaskCardHeaderMenu from './TaskCardHeaderMenu';
import { connect } from 'react-redux';
import actions from '../../actions';
import constants from '../../constants';
import { withRouter } from 'react-router-dom';
import { database, auth } from 'firebase/app';

class TaskCardContext extends React.PureComponent {
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
        const { task } = this.props;
        const { id } = task;

        this.onClose();
        this.setState({ isDeleteDisabled: true });
        this.deleteTaskById(id).then(()=>{}).catch((e)=>console.log(e));
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
    setActiveTask: (activeTask) => dispatch(actions.setActiveTask(activeTask)),
});

export default connect(null, mapDispatchToProps)(withRouter(TaskCardContext));