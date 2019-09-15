import React from 'react';
import { Modal, Card, Typography, CircularProgress, Button, Grid } from '@task-manager/theme';
import { API_STATUS } from '../../constants';

const TaskLoader = (props) => {
    const { loading, error, createNewTask, retry, redirectHome, cancelCreateTask } = props;

    const Loader = () => (
        <Card.Content>
            <Typography display='inline'>Saving</Typography>
            <CircularProgress />
        </Card.Content>
    );

    const SaveMenu = () => (
        <React.Fragment>
            <Card.Content>
                <Typography>  Task Created Successfully</Typography>
            </Card.Content>
            <Card.Actions>
                <Button onClick={createNewTask}>Create More</Button>
                <Button onClick={redirectHome}>Home</Button>
            </Card.Actions>
        </React.Fragment>
    );

    const ErrorMenu = () => (
        <React.Fragment>
            <Card.Content>
                <Typography>{JSON.stringify(error)}</Typography>
            </Card.Content>
            <Card.Actions>
                <Button onClick={retry}>Retry</Button>
                <Button onClick={cancelCreateTask}>Cancel</Button>
            </Card.Actions>
        </React.Fragment>
    );
    return (
        <Modal open={loading !== API_STATUS.INITIAL}>
            <Grid
                container
                justify='center'
                alignItems='center'
            >
                <Grid item>
                    <Card>
                        {loading === API_STATUS.SENT && <Loader />}
                        {loading === API_STATUS.RECEIVED && <SaveMenu />}
                        {loading === API_STATUS.ERROR && <ErrorMenu />}
                    </Card>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default TaskLoader;