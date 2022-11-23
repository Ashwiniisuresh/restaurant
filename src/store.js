import { createStore, combineReducers ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { restuarantListReducer } from './Reducers/restuarantReducer';

const reducers = combineReducers({
    restuarantReducer:restuarantListReducer
    
})

const middlewear = [thunk]

//store creation
const  store = createStore(reducers,applyMiddleware(...middlewear))

export default store
