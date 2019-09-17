import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import constants from '../../constants';

const HeaderContext = (props) => {
    const { history } = props;
    const { ROUTES } = constants;
    const redirect = (path) => history.push(path);


    const redirectHome = () => {
        if (location.pathname !== ROUTES.DASHBOARD) {
            redirect(ROUTES.DASHBOARD);
        }
    }

    const redirectToCreateTask = () => {
        if (location.pathname !== ROUTES.CREATE_TASK) {
            redirect(ROUTES.CREATE_TASK);
        }
    }

    return(
        <Header
            {...props}
            redirectToCreateTask={redirectToCreateTask}
            redirectHome={redirectHome}
        />
    );
};

export default withRouter(HeaderContext);