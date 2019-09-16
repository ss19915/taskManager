import React from 'react';
import TaskCard from './TaskCard';
import TaskCardHeaderMenu from './TaskCardHeaderMenu';
import { deleteTaskById } from '@task-manager/api';
import { connect } from 'react-redux';
import actions from '../../actions';

const TaskCardContext = (props) => {
    const [anchorEl, setAnchorEl] = React.useState();
    const { task, taskDeleted, localIndex } = props;
    const { _id: id } = task;
    const showCardHeaderMenu = ({ currentTarget }) => setAnchorEl(currentTarget);
    const onClose = () => setAnchorEl(null);
    const deleteTask = () => {
        onClose();
        deleteTaskById(id).then( () => taskDeleted(localIndex)).catch((error)=> console.log(error));
     };
    const viewTask = () => { };
    const editTask = () => { };
    const markAsComplete = () => { };

    return (
        <React.Fragment>
            <TaskCardHeaderMenu
                anchorEl={anchorEl}
                onClose={onClose}
                viewTask={viewTask}
                editTask={editTask}
                deleteTask={deleteTask}
                markAsComplete={markAsComplete}
            />
            <TaskCard
                showCardHeaderMenu={showCardHeaderMenu}
                {...task}
            />
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => ({
    taskDeleted: (localIndex) => dispatch(actions.deleteTask(localIndex)),
});

export default connect(null, mapDispatchToProps)(TaskCardContext);