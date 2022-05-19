import {SET_LOGIN,SET_LOGOUT} from '../constants/actionTypes'


export const login = () =>{
    return {
        type:SET_LOGIN,
        payload:true
    }
}

export const logout = () =>{
    return{
        type:SET_LOGOUT,
        payload:false
    }
}