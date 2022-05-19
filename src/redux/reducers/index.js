import {combineReducers} from 'redux'
import { productReducer,selectProductReducer } from './productReducers'
import {addItemReducer} from '../reducers/cartReducer'
import {isLoadingReducer} from '../reducers/cartLoadingReducer'
import {authentication} from '../reducers/authenticationReducer'

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectProductReducer,
    cart:addItemReducer,
    loading:isLoadingReducer,
    authentication:authentication
    
})

export default reducers;