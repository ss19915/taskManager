import React from 'react';
import { Route } from 'react-router-dom'
import constants from '../../constants';
import TaskCreator from '../TaskCreator';
import ViewTask from '../ViewTask';
import TaskEditor from '../TaskEditor';

const TaskView = () => {
    const { ROUTES } = constants;

    return (
        <React.Fragment>
            <Route path={ROUTES.CREATE_TASK} component={TaskCreator} />
            <Route path={ROUTES.VIEW_TASK} component={ViewTask} />
            <Route path={ROUTES.EDIT_TASK} component={TaskEditor} />
        </React.Fragment>
    );
}
export default TaskView;