import { actionConstants } from '../constants';
import _ from 'lodash';

const initialState = {
    allTasks: null,
};

const { SAVE_ALL_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK, ACTIVE_TASK, SET_USER, RESET_USER } = actionConstants;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ALL_TASKS:
            return ({ ...state, allTasks: action.allTasks });

        case SAVE_TASK: {
            const allTasks = _.cloneDeep(state.allTasks);

            allTasks.push(action.task);
            return ({ ...state, allTasks });
        }

        case DELETE_TASK: {
            const allTasks = [...state.allTasks];

            allTasks.splice(action.taskIndex, 1);
            return ({ ...state, allTasks });
        }

        case UPDATE_TASK: {
            const allTasks = _.cloneDeep(state.allTasks);
            const { taskIndex, task } = action;

            allTasks[taskIndex] = { ...allTasks[taskIndex], ...task };
            return ({ ...state, allTasks });
        }

        case ACTIVE_TASK:
            return ({ ...state, activeTask: action.activeTask });

        case SET_USER:
            return ({ ...state, user: action.user });

        case RESET_USER:
            return ({ ...state, user: null });
        default:
            return (state);
    }
};

export default reducer;