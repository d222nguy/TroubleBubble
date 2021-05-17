export const get_all_drinks_reducer = (state = {drinks: []}, action) =>{
    switch(action.type){
        case 'GET_DRINK_REQUEST': return{
            loading: true,
            ...state
        }
        case 'GET_DRINK_SUCCESS': return{
            loading: false,
            drinks: action.payload
        }
        case 'GET_DRINK_FAILED': return{
            loading: false,
            error: action.payload
        }
        default: return state
    }
}