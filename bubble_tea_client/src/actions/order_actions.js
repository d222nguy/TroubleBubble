import axios from 'axios';
export const place_order = (token, subtotal) => async (dispatch, getState) =>{
    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const current_user = getState().login_user_reducer.currentUser;
    const cartItems = getState().cart_reducer.cartItems;
    try{
        console.log(current_user, cartItems);
        const response = await axios.post('/api/orders/place', {token, subtotal, current_user, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'});
        console.log(response);
    } catch(error){
        dispatch({type: 'PLACE_ORDER_FAILED'});
        console.log(error);
    }
}

export const get_user_orders = () => async (dispatch, getState) =>{

    const currentUser = getState().login_user_reducer.currentUser
    dispatch({type:'GET_ORDERS_REQUEST'})

    try{

        const response = await axios.post('/api/orders/get_user_orders', {userid: currentUser._id}) //
        console.log(response);
        dispatch({type:'GET_ORDERS_SUCCESS', payload: response.data}) //dispatch should have no side effect. so we cannot dispatch an action like {type: 'GET_ALL_TEAS', uri} for example. Because in different time we may/may not access that uri

    } catch(error){
        console.log(error);
        dispatch({type:'GET_ORDERS_FAILED', payload: error})
    }
}