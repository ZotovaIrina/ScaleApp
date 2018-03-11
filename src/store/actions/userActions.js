import storage from '../middleware/storage';

export function setUserName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setAndSaveUserName(name) {
    storage.setItem('UserName', name);
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setNameValidationError(nameError) {
    return {
        type: 'SET_NAME_VALIDATION_ERROR',
        payload: nameError
    }
}
