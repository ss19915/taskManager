import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import constants from '../../constants';
import { Box, LinearProgress } from '@task-manager/theme';

const Home = React.lazy(() => import('./Home'));

const HomeContext = (props) => {
    const {
        history,
        user,
        location,
    } = props;
    const { ROUTES: { SIGN_IN } } = constants;

    if (_.isEmpty(user) && location.pathname !== SIGN_IN) {
        history.push(SIGN_IN)
    }
    const Loader = () => (
        <Box mt='40vh'>
            <br />
            <LinearProgress />
            <br />
            <LinearProgress color='secondary' />
            <br />
            <LinearProgress />
            <br />
        </Box>
    );

    return (
        <React.Suspense fallback={<Loader />}>
            <Home />
        </React.Suspense>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(withRouter(HomeContext));