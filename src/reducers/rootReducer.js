import { secretsReducer } from './secretsReducer'
import { userReducer } from './userReducer'


import { combineReducers } from 'redux'

const rootReducer = combineReducers( {
    user: userReducer,
    secrets: secretsReducer
} )

export default rootReducer