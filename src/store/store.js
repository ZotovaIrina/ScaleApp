import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import weightReducer from './reducers/weightReducer'

const reducers = combineReducers({
    user: userReducer,
    weight: weightReducer,
});

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (err) {
        console.log('Error: ', err);
    }

};

const middleware = applyMiddleware(thunk, logger, error);


const store = createStore(reducers,{
    //here can be apply initial state
}, middleware);


export default store;