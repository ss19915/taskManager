import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@task-manager/theme';
import T from 'prop-types';

const Header = (props) => {
    const { redirectToCreateTask, redirectHome } = props;

    return (
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' onClick={redirectHome}>
                    Task Manager
                </Typography>
                <Button onClick={redirectToCreateTask}>
                    Add New Task
                </Button>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        </React.Fragment>
    );
};

Header.propTypes = {
    redirectToCreateTask: T.func.isRequired,
    redirectHome: T.func.isRequired
};

export default Header;