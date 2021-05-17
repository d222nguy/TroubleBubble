import axios from "axios"


//get_all_teas() now serve as parameter for dispatch (as it will be called dispatch(get_all_teas()))
//get_all_teas() needs to return another function which now has the dispatch function as parameter, so we know when can we dispatch

//as with redux thunk, we can delay the dispatch of an action, or to dispatch only if a certain condition is met (here, only when we got response)
// https://redux.js.org/tutorials/fundamentals/part-6-async-logic

//https://github.com/reduxjs/redux-thunk

//https://stackoverflow.com/questions/59437315/why-use-dispatch-to-call-a-function-in-actions
export const get_all_drinks = () => async dispatch =>{
    dispatch({type:'GET_DRINK_REQUEST'})

    try{
        console.log("waiting!")
        const response = await axios.get('/api/drinks/getalldrinks') //
        console.log("response = " + response);
        dispatch({type:'GET_DRINK_SUCCESS', payload: response.data}) //dispatch should have no side effect. so we cannot dispatch an action like {type: 'GET_ALL_TEAS', uri} for example. Because in different time we may/may not access that uri

    } catch(error){
        dispatch({type:'GET_DRINK_FAILED', payload: error})
    }
}

export const get_filtered_drinks = (search_key, category) => async dispatch =>{

    var filtered_drinks;

    dispatch({type:'GET_DRINK_REQUEST'})

    try{
        console.log(category)
        const response = await axios.get('/api/drinks/getalldrinks') //
        filtered_drinks = response.data.filter(drink => drink.name.toLowerCase().includes(search_key)).filter(drink => ((category == 'all') || drink.category.toLowerCase() == category))
        dispatch({type:'GET_DRINK_SUCCESS', payload: filtered_drinks}) //dispatch should have no side effect. so we cannot dispatch an action like {type: 'GET_ALL_TEAS', uri} for example. Because in different time we may/may not access that uri

    } catch(error){
        console.log(error);
        dispatch({type:'GET_DRINK_FAILED', payload: error})
    }
}