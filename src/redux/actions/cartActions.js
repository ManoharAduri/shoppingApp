import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants/actionTypes'


export const addItemToCart = (cartItem) =>{
    return{
        type:ADD_TO_CART,
        payload:cartItem
    }
}

export const removeItemFromCart = (cartItem) =>{
    return{
        type:REMOVE_FROM_CART,
        payload:cartItem
    }
}