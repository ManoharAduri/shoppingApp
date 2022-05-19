import {SET_ISLOADING} from '../constants/actionTypes'

const initialState = {
    isLoading:false
}

export const isLoadingReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case SET_ISLOADING:
            return {isLoading:payload}

        default:
            return state;
    }
}

