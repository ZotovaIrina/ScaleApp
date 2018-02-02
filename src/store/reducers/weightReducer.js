import INITIAL_STATE from '../initialState'

export default (state = INITIAL_STATE.weight, action) => {
    let newState = {...state};
    return newState;
};