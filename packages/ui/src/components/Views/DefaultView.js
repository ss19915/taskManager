import React from 'react';
import DashBoardView from './DashBoardView';
import TaskView from './TaskView';

const DefaultView = () => (
    <React.Fragment>
        <DashBoardView/>
        <TaskView/>
    </React.Fragment>
);

export default DefaultView;