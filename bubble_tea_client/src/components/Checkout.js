import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import {place_order} from '../actions/order_actions'
import {place_order_reducer} from '../reducers/order_reducers'
import Success from '../components/Success'
import Error from '../components/Error'
import Loading from '../components/Loading'
export default function Checkout({subtotal}){
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.place_order_reducer)
    const {loading, error, success} = orderState
    function tokenHandler(token){
        console.log(token);
        dispatch(place_order(token, subtotal));
    }
    return(
        <div>
            {loading && <Loading/>}
            {error && <Error error = 'Something went wrong'/>}
            {success && <Success success = "Your drinks are on the way!"/>}
            <StripeCheckout 
            stripeKey = 'pk_test_51IrXknICIeTQCcpMZQhKRKrmmd0sNot9ht9aXXsILL8tiEeQ4LOIrdGjUvlgW8jh9fxdeRHRnV0tHb6QcJeqqAVb000dcX5DsX' 
            amount = {subtotal * 100} 
            shippingAddress 
            token = {tokenHandler} currency = 'CAD'>
                <button className="btn">
                    CHECK OUT (via Stripe)
                </button>
            </StripeCheckout>
        </div>
    )
}