import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import actions from '../../actions';
import { withRouter } from 'react-router-dom';
import constants from '../../constants';

const LoginContext = (props) => {
    const { history, user } = props;

    if(user){
        history.push(constants.ROUTES.DASHBOARD);
    }
    return (<Login {...props} />);
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContext));