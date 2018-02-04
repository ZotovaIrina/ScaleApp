import INITIAL_STATE from '../initialState'
import storage from '../middleware/storage'

export default (state = INITIAL_STATE.user, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_NAME': {
            newState.UserName = action.payload;
            storage.setItem('UserName', action.payload);
            break;
        }
        case 'GET_NAME': {
            return state.getState().UserName;
        }
    }
    return newState;
};