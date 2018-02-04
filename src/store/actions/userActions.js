export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function getName() {
    return {
        type: 'SET_NAME',
        payload: ''
    }
}