import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import Home from './components';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp, auth } from 'firebase/app';
import 'firebase/auth';
import constants from './constants';
import actions from './actions'

class App extends React.Component {

    componentDidMount() {
        try {
            initializeApp(constants.FIREBASE_CONFIG);
            auth().onAuthStateChanged((authUser) => {
                if (authUser) {
                    const { user, setUser } = this.props;

                    if (authUser !== null && authUser.displayName !== '' && _.isEmpty(user)) {
                        setUser(authUser);
                    }

                } else if (!_.isEmpty(user)) {
                    setUser(authUser);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Home />
            </BrowserRouter >
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(actions.setUser(user)),
});

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));