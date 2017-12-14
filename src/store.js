import {createStore, combineReducers} from 'redux'
import personalDetails from './reducers/personalDetailReducer.js'
import otherDetails from './reducers/otherDetailReducer.js'

const reducers = combineReducers({personalDetails,otherDetails})

export default createStore(reducers)
