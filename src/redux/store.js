import {createStore,applyMiddleware,compose} from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import reducers from '../redux/reducers/index'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
    key:'root',
    storage,
}

const persitedReducer = persistReducer(persistConfig,reducers)

const store = createStore(persitedReducer,composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store)
export {persistor}
export default store;