import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import INITIAL_STATE from './initialState'
import userReducer from './reducers/userReducer'
import weightReducer from './reducers/weightReducer'

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