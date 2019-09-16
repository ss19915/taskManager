import { actionConstants } from '../constants';
import _ from 'lodash';

const initialState = {
    allTasks: null,
};

const { SAVE_ALL_TASKS, DELETE_TASK, UPDATE_TASK } = actionConstants;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ALL_TASKS:
            return ({ ...state, allTasks: action.allTasks });

        case DELETE_TASK: {
            const allTasks = [...state.allTasks];

            allTasks.splice(action.taskIndex, 1);
            return ({ ...state, allTasks })
        }

        case UPDATE_TASK: {
            const allTasks = _.cloneDeep(state.allTasks);
            const { taskIndex, task } = action;

            allTasks[taskIndex] = { ...allTasks[taskIndex], ...task };
            return ({ ...state, allTasks });
        }

        default:
            return (state);
    }
};

export default reducer;