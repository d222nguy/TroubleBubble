import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {logout_user} from '../actions/user_actions'
export default function Navbar() {
    const cart_state = useSelector(state => state.cart_reducer)
    console.log(cart_state.cartItems)
    const dispatch = useDispatch();
    const userstate = useSelector(state => state.login_user_reducer)
    const { currentUser } = userstate
    console.log(currentUser)
    console.log('adsfadsfadsf')
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Trouble Bubble</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {currentUser ? (<div className="dropdown mt-2">
                            Logged in as:  
                            <a className="dropdown-toggle ml-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {currentUser.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/order">Orders</a>
                                <a className="dropdown-item" onClick = {() => {dispatch(logout_user())}}>Logout</a>
                            </div>
                        </div>) :(
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">
                                    Login
                            </a>
                            </li>)}
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart: {cart_state.cartItems.length} (items)
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}