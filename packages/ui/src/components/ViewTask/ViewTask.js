import React from 'react';
import { Card, IconButton, MoreVertIcon, Checkbox, Typography, Fab, ArrowBackIcon } from '@task-manager/theme';
import T from 'prop-types';

const ViewTask = (props) => {
    const {
        name,
        description,
        showCardHeaderMenu,
        completed = false,
        markAsComplete,
        isCompleteCheckBoxDisabled,
        goBack,
    } = props;

    return (
        <Card>
            <Card.Header
                title={name}
                titleTypographyProps={{
                    variant: 'h5'
                }}
                avatar={
                    <Fab onClick={goBack}><ArrowBackIcon /></Fab>
                }
                action={
                    <IconButton onClick={showCardHeaderMenu}>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <Card.Content>
                {description}
            </Card.Content>
            <Card.Actions>
                <Checkbox
                    checked={completed}
                    onClick={markAsComplete}
                    disabled={isCompleteCheckBoxDisabled}
                />
                <Typography>
                    {completed ? 'Completed' : 'Incomplete'}
                </Typography>
            </Card.Actions>
        </Card>
    );
}

ViewTask.propTypes = {
    name: T.string.isRequired,
    description: T.string,
    showCardHeaderMenu: T.func.isRequired,
    completed: T.bool,
    markAsComplete: T.func.isRequired,
    isCompleteCheckBoxDisabled: T.bool,
    goBack: T.func.isRequired,
};

export default ViewTask;