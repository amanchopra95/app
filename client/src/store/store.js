import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middlerware = [thunk]
const enhancers = []

const initialState = {}

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlerware),
        ...enhancers
    )
)

export default store