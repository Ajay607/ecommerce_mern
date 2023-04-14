import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk  from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './redux/reducers/productReducer';

const reducer = combineReducers({
    product: productReducer,
    productDetails: productDetailsReducer
})

let initialstate = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
