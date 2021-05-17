import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { get_user_orders } from '../actions/order_actions'
import Loading from '../components/Loading'
import Error from '../components/Error'
export default function Order(){
    console.log('Go to order')
    const dispatch = useDispatch();
    const order_state = useSelector(state => state.get_user_orders_reducer)
    const {orders, error, loading} = order_state
    useEffect(() =>{
        dispatch(get_user_orders())
    }, [])
    return(
        <div>
            <h2>Orders</h2>
            <hr/>
            <div className="row justify-content-center">
                {loading && (<Loading/>)}
                {error && (<Error error = "Something went wrong"/>)}
                {orders && orders.map(order =>
                    {return <div className="col-md-8 m-2 p-2" style = {{backgroundColor: 'gray', color: 'white'}} >
                            <div className="flex-container">
                                <div className='text-left w-100 m-1'>
                                    <h2 style = {{fontSize: '25px'}}>Items</h2>
                                    <hr/>
                                    {order.orderItems.map(item =>{
                                        return <div>
                                            <p>{item.name} [{item.variant}] * {item.quantity} = {item.price * item.quantity}$</p>
                                            
                                        </div>
                                    })}
                                </div>
                                <div className='text-left w-100 m-1'>
                                    <h2 style = {{fontSize: '25px'}}>Address</h2>
                                    <hr/>
                                    <p> Street: {order.shippingAddress.street}</p>
                                    <p> City: {order.shippingAddress.city}</p>
                                </div>

                                <div className='text-left w-100 m-1'>
                                <h2 style = {{fontSize: '25px'}}>Order Info</h2>
                                    <hr/>
                                    <p> Order Amount: {order.orderAmount} CAD</p>
                                    <p> Transaction ID: {order.transactionId}</p>
                                    <p> Order ID: {order._id}</p>
                                </div>
                            </div>

                        </div> }
                )}
            </div>
        </div>
    )
}