import INITIAL_STATE from '../initialState'

export default (state = INITIAL_STATE.user, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_NAME': {
            newState.name = action.payload;
        }
    }
    return newState;
};