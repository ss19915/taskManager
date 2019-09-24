import React from 'react';
import TaskEditor from './TaskEditor';
import { withRouter } from 'react-router-dom';
import constants from '../../constants';
import { connect } from 'react-redux';

const TaskEditorContext = (props) => {
    const { history, task } = props;
    const redirectHome = () => {
        history.push(constants.ROUTES.DASHBOARD);
    };

    if(task === null){
        redirectHome();
    }

    return (
        <TaskEditor
            {...props}
            redirectHome={redirectHome}
        />
    );
}

const mapStateToProps = (state) => ({
    task: state.allTasks === null ? null : state.allTasks[state.activeTask],
});

export default connect(mapStateToProps)(withRouter(TaskEditorContext));