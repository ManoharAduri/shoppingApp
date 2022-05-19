import { SET_PRODUCTS, SELECTED_PRODUCT,FETCH_PRODUCTS } from "../constants/actionTypes"

const initial_state = {
    products: []
}


export const productReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload }
        case FETCH_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}

export const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state;
    }
}