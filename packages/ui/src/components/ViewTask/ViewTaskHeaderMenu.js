import React from 'react';
import { Menu } from '@task-manager/theme';

const TaskCardHeaderMenu = (props) => {
    const {
        anchorEl,
        onClose,
        editTask,
        deleteTask,
        isDeleteDisabled
    } = props;

    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            <Menu.Item onClick={editTask}>Edit</Menu.Item>
            <Menu.Item disabled={isDeleteDisabled} onClick={deleteTask}>Delete</Menu.Item>
        </Menu>
    );
};

export default TaskCardHeaderMenu;