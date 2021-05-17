import {combineReducers} from 'redux'

import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { get_all_drinks_reducer } from './reducers/bubble_reducers'
import {cart_reducer} from './reducers/cart_reducers'
import {register_user_reducer, login_user_reducer} from './reducers/user_reducer'
import {place_order_reducer, get_user_orders_reducer} from './reducers/order_reducers'


const finalReducer = combineReducers({
    get_all_drinks_reducer : get_all_drinks_reducer,
    cart_reducer: cart_reducer,
    register_user_reducer: register_user_reducer,
    login_user_reducer: login_user_reducer,
    place_order_reducer: place_order_reducer,
    get_user_orders_reducer: get_user_orders_reducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cart_reducer:{
        cartItems: cartItems
    },
    login_user_reducer:{
        currentUser: currentUser
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store