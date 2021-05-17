import { pizzas } from "../original"

export const add_to_cart = (drink, quantity, variant) => (dispatch, getState) =>{

    // console.log(tea);
    // console.log(tea.prices);
    var cartItem = {
        name: drink.name,
        _id: drink._id,
        image: drink.image,
        variant: variant,
        quantity: Number(quantity),
        price: drink.hasOwnProperty("price") ? drink.price : drink.prices[0][variant]
    }


    dispatch({type: 'ADD_TO_CART', payload: cartItem})

    const cartItems = getState().cart_reducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const delete_from_cart = (drink) => (dispatch, getState) => {

    dispatch({type: 'DELETE_FROM_CART', payload: drink})
    const cartItems = getState().cart_reducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}