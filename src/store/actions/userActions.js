export function setName(name) {
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
