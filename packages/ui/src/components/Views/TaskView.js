import React from 'react';
import { Route } from 'react-router-dom'
import constants from '../../constants';
import TaskCreator from '../TaskCreator';
import ViewTask from '../ViewTask';

const { ROUTES } = constants;

const TaskView = () => (
    <React.Fragment>
        <Route path={ROUTES.CREATE_TASK} component={TaskCreator} />
        <Route path={ROUTES.VIEW_TASK} component={ViewTask} />
    </React.Fragment>
);

export default TaskView;