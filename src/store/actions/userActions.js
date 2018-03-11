import storage from '../middleware/storage';

export function setDefaultUserName() {
    return {
        type: 'SET_USER_NAME_FROM_STORAGE',
        payload: storage.getItem('UserName')
    }
}

export function setUserName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setAndSaveUserName(name) {
    storage.setItem('UserName', name);
    return {
        type: 'SET_USER_NAME_FROM_STORAGE',
        payload: name
    }
}

export function setNameValidationError(nameError) {
    return {
        type: 'SET_NAME_VALIDATION_ERROR',
        payload: nameError
    }
}

export function setShowUserNameError(value) {
    return {
        type: 'SET_SHOW_USER_NAME_ERROR',
        payload: value
    }
}
