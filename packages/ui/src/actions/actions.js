import { actionConstants } from '../constants';

const { SAVE_ALL_TASKS, SAVE_TASK } = actionConstants;

export const saveAllTask = (allTasks) => ({
    type: SAVE_ALL_TASKS,
    allTasks
});

export const saveTask = (task) => ({
    type: SAVE_TASK,
    task,
})