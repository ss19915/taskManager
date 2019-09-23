import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../Login';
import constants from '../../constants';

const AuthenticationView = () => (
    <Route path={constants.ROUTES.SIGN_IN} exact component={Login} />
);

export default AuthenticationView;