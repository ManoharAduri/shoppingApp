import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants/actionTypes'


const initialState = {
    cartItems:[]
}

export const addItemReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ADD_TO_CART:{
            console.log(payload.cartItem,payload.itemPrice)
            const itemIndex = state.cartItems.findIndex(item=>item.id === payload.cartItem.id)
            const cartItem = state.cartItems.find(item=>item.id === payload.cartItem.id)
            let updatedCartItems;
            if(!cartItem){
                updatedCartItems = [...state.cartItems,{id:payload.cartItem.id,title:payload.cartItem.title,quantity:1,price:payload.cartItem.price,image:payload.cartItem.image}]
            }else{
                state.cartItems[itemIndex].quantity += 1;
                state.cartItems[itemIndex].price += payload.itemPrice;
                updatedCartItems = state.cartItems;
                 
            }

            return{
                cartItems:updatedCartItems
            }

        }
        case REMOVE_FROM_CART:{
            console.log(payload.cartItem,payload.itemPrice)
            const itemIndex = state.cartItems.findIndex(item=>item.id === payload.cartItem.id)
            const quantity = state.cartItems[itemIndex].quantity
            let updatedCartItems;
            if(quantity>1){
                state.cartItems[itemIndex].quantity -= 1
                state.cartItems[itemIndex].price = +(state.cartItems[itemIndex].price-payload.itemPrice).toFixed(2);
                updatedCartItems = state.cartItems
            }else{
                updatedCartItems = state.cartItems.filter(item=>item.id !== payload.cartItem.id);
            }

            return{
                cartItems:updatedCartItems
            }
        }
        default:
            return state;
    }
}