import { actionConstants } from '../constants';

const { SAVE_ALL_TASKS } = actionConstants;

export const saveAllTask = (allTasks) => ({
    type: SAVE_ALL_TASKS,
    allTasks
}); 