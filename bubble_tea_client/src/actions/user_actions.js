import axios from 'axios';

export const register_user = (user) => async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try{
        const response = await axios.post('/api/users/register', user)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error){
        console.log(error);
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}

export const login_user = (user) => async dispatch =>{
    dispatch({type: 'USER_LOGIN_REQUEST'})
    try{
        console.log('seending login request');
        const response = await axios.post('/api/users/login', user);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data});
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/'
    } catch(error){
        console.log(error);
        dispatch({type: 'USER_LOGIN_FAILED', payload: error});
    }
}

export const logout_user = (user) => async dispatch=>{
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
}