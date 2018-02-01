import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

const INITIAL_STATE = {
    user: {name: 'Irina'},
    weight: []
};

const userReducer = (state = INITIAL_STATE.user, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_NAME': {

            newState.name = action.payload;
        }
    }
    return newState;
};
const weightReducer = (state = INITIAL_STATE.weight, action) => {
    let newState = {...state};
    return newState;
};

const reducers = combineReducers({
    user: userReducer,
    weight: weightReducer,
});

const loggerFunction = (store) => (next) => (action) => {
    console.log('action', action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (err) {
        console.log('Error: ', err);
    }

};

const middleware = applyMiddleware(loggerFunction, logger, error);


const store = createStore(reducers,{
    //here can be apply initial state
}, middleware);



store.subscribe(() => {
    console.log('Store is changed', store.getState);
});

//store.dispatch({type: 'changeName', payload: 'Irina'});
//store.dispatch({type: 'changeAge', payload: 30});

export default store;