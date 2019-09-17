import React from 'react';
import { AppBar, Typography, Fab, Toolbar } from '@task-manager/theme';

const Header = (props) => {
    const { redirectToCreateTask, redirectHome } = props;

    return (
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' onClick={redirectHome}>
                    Task Manager
                </Typography>
                <Fab variant='extended' onClick={redirectToCreateTask}>
                    Add New Task
                </Fab>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        </React.Fragment>
    );
};

export default Header;