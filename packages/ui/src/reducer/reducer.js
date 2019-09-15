import { actionConstants } from '../constants';

const initialState = {
    allTasks: null,
};

const { SAVE_ALL_TASKS } = actionConstants;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_ALL_TASKS:
            return { ...state, allTasks: action.allTasks };
        default:
            return(state);
    }
};

export default reducer;