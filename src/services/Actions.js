import {combineReducers, createStore} from 'redux';

const userReducer = (state={}, action) => {
    let newState = state.slice();
    switch (action.type) {
        case 'changeName': {
            newState.name = action.payload;
            break;
        }
        case 'changeAge': {
            newState.age = action.payload;
            break;
        }
    }
    return newState;
};
const weightReducer = (state=[], action) => {
    return state;
};

const reducers = combineReducers({
    user: userReducer(),
    weight: weightReducer(),
});

const INITIAL_STATE = {
    user: {name: ''},
    weight: []
};

const store = createStore(reducers);


store.subscribe(() => {
    console.log('Store is changed', store.getState);
});

store.dispatch({type: 'changeName', payload: 'Irina'});
store.dispatch({type: 'changeAge', payload: 30});