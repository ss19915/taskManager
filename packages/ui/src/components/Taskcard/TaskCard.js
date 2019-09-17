import React from 'react';
import { Card, IconButton, MoreVertIcon, Checkbox, Typography } from '@task-manager/theme';
import utils from '../../utils'
import T from 'prop-types';

const TaskCard = (props) => {
    const {
        name,
        description,
        showCardHeaderMenu,
        completed = false,
        markAsComplete,
        isCompleteCheckBoxDisabled,
        viewTask,
    } = props;

    const headerMaxLength = 30;
    const contentMaxLength = 300;

    return (
        <Card>
            <Card.Header
                title={utils.limitCharacter(name, headerMaxLength)}
                action={
                    <IconButton onClick={showCardHeaderMenu}>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <Card.ActionArea onClick={viewTask}>
                <Card.Content>
                    {utils.limitCharacter(description, contentMaxLength)}
                </Card.Content>
            </Card.ActionArea>
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
};

TaskCard.propTypes = {
    name: T.string.isRequired,
    description: T.string,
    showCardHeaderMenu: T.func.isRequired,
    completed: T.bool,
    markAsComplete: T.func.isRequired,
    isCompleteCheckBoxDisabled: T.bool,
    viewTask: T.func.isRequired,
};

export default TaskCard;