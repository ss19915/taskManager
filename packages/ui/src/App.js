import React from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './components';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
);

export default hot(App);