import { actionConstants } from '../constants';

const initialState = {
    allTasks: null,
};

const { SAVE_ALL_TASKS, DELETE_TASK } = actionConstants;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ALL_TASKS:
            return { ...state, allTasks: action.allTasks };
        case DELETE_TASK: {
            const allTasks = [...state.allTasks];

            allTasks.splice(action.localIndex, 1);
            return ({ allTasks })
        }
        default:
            return (state);
    }
};

export default reducer;