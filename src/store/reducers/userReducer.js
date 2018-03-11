const INITIAL_STATE = {
    userName: '',
    nameError: '',
    eventData: {
        isUserLoggedIn: false,
        showUserNameError: false,
    }
};

export default (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_USER_NAME_FROM_STORAGE': {
            newState.userName = action.payload;
            if (newState.userName) {
                newState.eventData.isUserLoggedIn = true;
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
            newState.eventData.showUserNameError = action.payload;
            break;
        }
    }
    return newState;
};