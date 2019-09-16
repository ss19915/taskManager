import React from 'react';
import { Card, IconButton, MoreVertIcon } from '@task-manager/theme';
import TaskCardHeaderMenu from './TaskCardHeaderMenu';

const TaskCard = (props) => {

    const {
        name,
        description,
        showCardHeaderMenu
    } = props;

    return (
        <Card>
            <Card.Header
                title={name}
                action={
                    <IconButton onClick={showCardHeaderMenu}>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <Card.ActionArea>
                <Card.Content>
                    {description}
                </Card.Content>
            </Card.ActionArea>
        </Card>
    );
}

export default TaskCard;