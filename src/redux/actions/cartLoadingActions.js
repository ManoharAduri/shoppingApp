import {SET_ISLOADING} from '../constants/actionTypes'

export const setIsLoading = (value) =>{
    return{
        type:SET_ISLOADING,
        payload:value
    }
}