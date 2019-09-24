import React from 'react';
import TaskCreator from './TaskCreator';
import { withRouter } from 'react-router-dom';
import constants from '../../constants';

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


export default withRouter(TaskCreatorContext);