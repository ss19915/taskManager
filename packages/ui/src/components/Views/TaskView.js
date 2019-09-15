import React from 'react';
import { Route } from 'react-router-dom'
import { ROUTES } from '../../constants';
import TaskCreator from '../TaskCreator';

const TaskView = () => (
    <React.Fragment>
        <Route path={ROUTES.CREATE_TASK} exact component={TaskCreator} />
    </React.Fragment>
);

export default TaskView;