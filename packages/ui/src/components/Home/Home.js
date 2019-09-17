import React from 'react';
import DefaultView from '../Views'
import Header from '../Header';
import {CssBaseline, Box} from '@task-manager/theme';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
                <Box m={1}>
                    <DefaultView/>
                </Box>
        </React.Fragment>
    );
}

export default Home;