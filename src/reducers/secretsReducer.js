
const initialState = [ {id: 1, content: 'first secret'} ]

export function secretsReducer( state = initialState, action ) {
    switch( action.type ) {
        case 'secrets/new':
            //this one assumes that the action's payload is a new secret we
            //want to add to the array.
            return [ ...state, action.payload ]
        case 'secrets/update':
            //this one assumes that the action's payload is an existing
            //secret that we just changed

            console.log( 'previous value of state', state )
            const newState = state.map( s => {
                if( s.id == action.payload.id ) {
                    return action.payload
                } else {
                    return s
                }
            } )
            console.log( 'what we are changing state to', newState )
            return newState
        case 'secrets/remove':
            //this one assumes the action's payload is a secret we want to 
            //remove from state
            return state.filter( s => action.payload.id !== s.id )
       
        default:
            return state
    }
}
