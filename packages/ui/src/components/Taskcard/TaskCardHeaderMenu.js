import React from 'react';
import { Menu } from '@task-manager/theme';
import T from 'prop-types';

const TaskCardHeaderMenu = (props) => {
    const {
        anchorEl,
        onClose,
        viewTask,
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
            <Menu.Item onClick={viewTask}>View</Menu.Item>
            <Menu.Item onClick={editTask}>Edit</Menu.Item>
            <Menu.Item disabled={isDeleteDisabled} onClick={deleteTask}>Delete</Menu.Item>
        </Menu>
    );
};

TaskCardHeaderMenu.propTypes = {
    anchorEl: T.object,
    onClose: T.func.isRequired,
    viewTask: T.func.isRequired,
    editTask: T.func.isRequired,
    deleteTask: T.func.isRequired,
    isDeleteDisabled: T.bool,
};

export default TaskCardHeaderMenu;