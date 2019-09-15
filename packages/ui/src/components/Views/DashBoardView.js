import React from 'react';
import { Route } from 'react-router-dom'
import DashBoard from '../DashBoard/';
import constants from '../../constants';

const DashBoardView = () => (
    <Route path={constants.ROUTES.DASHBOARD} exact component={DashBoard}/>
);

export default DashBoardView;