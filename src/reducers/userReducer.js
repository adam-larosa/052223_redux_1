
const initialState = false

export const userReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'user/set':
            // this one assumes the action's payload is a new user object
            return action.payload
        default:
            return state
    }
}