import React from 'react';
import { Route } from 'react-router-dom'
import DashBoard from '../DashBoard/';
import { ROUTES } from '../../constants';

const DashBoardView = () => (
    <Route path={ROUTES.DASHBOARD} exact component={DashBoard}/>
);

export default DashBoardView;