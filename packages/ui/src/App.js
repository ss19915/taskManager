import React from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './components';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import constants from './constants';

class App extends React.Component {

    componentDidMount() {
        try {
            initializeApp(constants.FIREBASE_CONFIG);            
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

export default hot(App);