import React from 'react';
import { Paper, Grid } from '@task-manager/theme';
import TaskCard from '../TaskCard';

const DashBoard = (props) => {
    const {
        allTasks,
    } = props;

    return (
        <Paper>
            <Grid spacing={1} container>
                {allTasks.map((task, index) => (
                    <Grid item xl={1} lg={2} md={2} sm={3} xs={6} key={index}>
                        <TaskCard taskIndex={index} key={index} task={task} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default DashBoard;