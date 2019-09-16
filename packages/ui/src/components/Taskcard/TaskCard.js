import React from 'react';
import { Card, IconButton, MoreVertIcon, Checkbox, Typography } from '@task-manager/theme';
import utils from '../../utils'

const TaskCard = (props) => {

    const {
        name,
        description,
        showCardHeaderMenu,
        completed,
        markAsComplete,
        isCompleteCheckBoxDisabled,
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
            <Card.ActionArea>
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
}

export default TaskCard;