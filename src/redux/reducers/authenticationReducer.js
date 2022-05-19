import {SET_LOGIN,SET_LOGOUT} from '../constants/actionTypes'


const initialState = {
    isLoggedIn:false
}

export const authentication = (state=initialState,{type,payload}) =>{
    switch(type){
        case SET_LOGIN:
            return {isLoggedIn:payload}
        case SET_LOGOUT:
            return {isLoggedIn:payload}
        default:
            return state
    }
}