import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {register_user} from '../actions/user_actions'
import Success from '../components/Success'
import Error from '../components/Error'
import Loading from '../components/Loading'
export default function RegisterScreen(){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cf_password, setcf_password] = useState('')
    const registerstate = useSelector(state => state.register_user_reducer)
    const {error, loading, success} = registerstate
    const dispatch = useDispatch();
    function register(){
        if (password != cf_password){
            alert("Passwords not matched!");
        }
        else{
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(register_user(user));
        }
    }
    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className = "col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading/>)}

                    {success && (<Success success = 'User Register Successfully!'/>)}

                    {error && (<Error error = 'Email Already Registered!'/>)}
                    <h2 className="text-center m-2" style={{fontSize: "35px"}}>Register</h2>
                    <div>
                        <input type="text" required placeholder = "name" className = "form-control" value = {name} onChange = {(e) => setname(e.target.value)}></input>
                        <input type="text" required placeholder = "email" className = "form-control" value = {email} onChange = {(e) => setemail(e.target.value)}></input>
                        <input type="text" required placeholder = "password" className = "form-control" value = {password} onChange = {(e) => setpassword(e.target.value)}></input>
                        <input type="text" required placeholder = "confirm password" className = "form-control" value = {cf_password} onChange = {(e) => setcf_password(e.target.value)} ></input>
                        <button className="btn mt-3" onClick = {() => register()}>REGISTER</button> {/* should be function instead of function call, if it is a function it will be called each time rerender */}

                    </div>
                    <br></br>
                    <a href = "/login" className="mt-2 shadow-">Click Here To Login</a>
                </div>
                
            </div>
     

        </div>
    )
}