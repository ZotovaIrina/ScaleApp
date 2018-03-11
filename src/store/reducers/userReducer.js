import INITIAL_STATE from '../initialState'

export default (state = INITIAL_STATE.user, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_USER_NAME_FROM_STORAGE': {
            newState.userName = action.payload;
            if (newState.userName) {
                newState.isUserLoggedIn = true;
            }
            break;
        }
        case 'SET_NAME': {
            newState.userName = action.payload;
            break;
        }
        case 'SET_NAME_VALIDATION_ERROR': {
            newState.nameError = action.payload;
            break;
        }
        case 'SET_SHOW_USER_NAME_ERROR': {
            newState.showUserNameError = action.payload;
            break;
        }
    }
    return newState;
};