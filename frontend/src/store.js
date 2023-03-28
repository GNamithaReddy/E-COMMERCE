import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer} from './reducers/productReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer

})

// const initialState = {}
const middleware = [thunk]
const store = configureStore({reducer,middleware}, composeWithDevTools() )

export default store

