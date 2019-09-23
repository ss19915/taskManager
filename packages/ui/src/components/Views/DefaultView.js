import React from 'react';
import DashBoardView from './DashBoardView';
import TaskView from './TaskView';
import AuthenticationView from './AuthenticationView';

const DefaultView = () => (
    <React.Fragment>
        <DashBoardView/>
        <TaskView/>
        <AuthenticationView/>
    </React.Fragment>
);

export default DefaultView;