import React from 'react';
import TaskCreator from './TaskCreator';
import { withRouter } from 'react-router-dom';
import constants from '../../constants';
import { connect } from 'react-redux';
import actions from '../../actions';

const TaskCreatorContext = (props) => {
    const { history, saveTask } = props;
    const redirectHome = () => {
        history.push(constants.ROUTES.DASHBOARD);
    };

    return (
        <TaskCreator
            saveTask={saveTask}
            redirectHome={redirectHome}
        />
    );
}

const mapDispatchToProps = (dispatch) => ({
    saveTask: (task) => dispatch(actions.saveTask(task)),
})

export default connect(null, mapDispatchToProps)(withRouter(TaskCreatorContext));