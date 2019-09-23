import React from 'react';
import TaskCreator from './TaskCreator';
import { withRouter } from 'react-router-dom';
import constants from '../../constants';
import { connect } from 'react-redux';

const TaskCreatorContext = (props) => {
    const { history } = props;
    const redirectHome = () => {
        history.push(constants.ROUTES.DASHBOARD);
    };

    return (
        <TaskCreator
            {...props}
            redirectHome={redirectHome}
        />
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps)(withRouter(TaskCreatorContext));