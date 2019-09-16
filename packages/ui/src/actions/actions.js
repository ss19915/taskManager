import { actionConstants } from '../constants';

const { SAVE_ALL_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK, ACTIVE_TASK } = actionConstants;

export const saveAllTask = (allTasks) => ({
    type: SAVE_ALL_TASKS,
    allTasks
});

export const saveTask = (task) => ({
    type: SAVE_TASK,
    task,
});

export const deleteTask = (taskIndex) => ({
    type: DELETE_TASK,
    taskIndex,
});

export const updateTask = (taskIndex, task) => ({
    type: UPDATE_TASK,
    taskIndex,
    task,
});

export const setActiveTask = (activeTask) => ({
    type: ACTIVE_TASK,
    activeTask,
});