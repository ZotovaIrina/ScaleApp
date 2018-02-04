import INITIAL_STATE from '../initialState'
import storage from '../middleware/storage'

export default (state = INITIAL_STATE.user, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_NAME': {
            newState.userName = action.payload;
            storage.setItem('UserName', action.payload);
            break;
        }
    }
    return newState;
};