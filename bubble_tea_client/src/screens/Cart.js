import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {add_to_cart, delete_from_cart} from '../actions/cart_actions'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Checkout from '../components/Checkout'
import AOS from 'aos'

export default function Cart() {

    AOS.init({
        duration: 1000
    })
    const cart_state = useSelector(state => state.cart_reducer)
    const cartItems = cart_state.cartItems
    const dispatch = useDispatch()

    var subtotal = cartItems.reduce((x, item) => x + item.price*item.quantity, 0);
    console.log(cartItems)
    return (
        <div className ="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <h2 style={{ fontSize: '35px' }}>My Cart</h2>
                    {cartItems.map(item => {
                        console.log(item.quantity);
                        return <div className="flex-container text-left">
                            <div className="text-start m-1 w-100">
                                <p style = {{fontSize: '30px'}}>{item.name} [{item.variant}]</p>
                                <h1>Price: {item.quantity} * {item.price} = {item.quantity * item.price} CAD</h1>
                                <h1 style = {{display: 'inline'}}>Quantity: </h1>
                                <i className="fas fa-plus-circle" onClick={() => dispatch(add_to_cart(item, item.quantity + 1, item.variant))}></i>
                                <b>{item.quantity}</b>
                                <i className="fas fa-minus-circle" onClick = {() => dispatch(add_to_cart(item, item.quantity > 0 ? item.quantity - 1 : item.quantity, item.variant))}></i>
                                <hr></hr>
                            </div>
                            <div className="m-1 w-100">
                            <img src = {item.image} style = {{height:'100px', width: '100px'}}></img>
                            </div>
                            
                            <div className="m-1 w-100">
                            <i className="fas fa-trash mt-4" onClick = {() => dispatch(delete_from_cart(item))}></i>
                            </div>
                        </div>
                    })}

                </div>

                <div className="col-md-4">
                    <h2 style = {{fontSize: '40px'}} >Subtotal: {subtotal} C$</h2>
                    <br></br>
                    <Checkout subtotal = {subtotal}></Checkout>
                </div>
            </div>
        </div>
    )
}