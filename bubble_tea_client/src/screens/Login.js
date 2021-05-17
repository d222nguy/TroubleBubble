import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login_user } from '../actions/user_actions'
import {login_user_reducer} from '../reducers/user_reducer'
import Error from '../components/Error'
import Loading from '../components/Loading'
export default function Loginscreen() {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const dispatch = useDispatch();
    const login_state = useSelector(state => state.login_user_reducer)
    const {loading, error} = login_state
    console.log('err = ' + error)
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])
    function login() {
        const user = { email, password };
        dispatch(login_user(user));
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: "35px" }}>Login</h2>

                    {loading && <Loading/>}
                    {error && <Error error = 'Invalid Credential'/>}
                    <div>
                        <input type="text" required placeholder="email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <input type="text" required placeholder="password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                        <button className="btn mt-3" onClick={() => login()}>LOGIN</button> {/* should be function instead of function call, if it is a function it will be called each time rerender */}
                    </div>
                    <br></br>
                    <a href="/register"> Click Here To Register</a>
                </div>

            </div>


        </div>
    )
}