import {SET_PRODUCTS,SELECTED_PRODUCT,FETCH_PRODUCTS,SET_ISLOADING} from '../constants/actionTypes'
import fakeStoreAPI from '../../apis/fakeStoreAPI'

export const setProduct = (product) =>{
    return {
        type:SET_PRODUCTS,
        payload:product
    }
}


export const fetchProductsAction = () =>{

    return async (dispatch)=>{
        dispatch({type:SET_ISLOADING,payload:true})
        const response = await fakeStoreAPI.get('/products')
        dispatch({type:SET_ISLOADING,payload:false})
        dispatch({type:FETCH_PRODUCTS,payload:response.data})
    }
    
}

export const selectedProduct = (product) =>{
    return{
        type:SELECTED_PRODUCT,
        payload:product
    }
}