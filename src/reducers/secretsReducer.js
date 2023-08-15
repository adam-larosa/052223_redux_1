
const initialState = []

/* An 'action creator' is nothing more than a function which has a return value
   of the action we're trying to create.  Remember, an 'action' is really 
   nothing more than a JavaScript object */



export const fetchSecrets = () => {
    return function( dispatch ) {
        fetch( 'http://localhost:3000/secrets' )
            .then( r => {
                if( r.ok ) {
                    r.json().then( payload => {
                        dispatch( { type: 'secrets/set', payload } )
                    } )
                }
            } )
            
    }
}



export const addSecret = new_secret => {
    return {
        type: 'secrets/new',
        payload: {
            content: new_secret
        }
    }
}



export function secretsReducer( state = initialState, action ) {
    switch( action.type ) {
        case 'secrets/set':
            //this one assumes the action's payload is a newly fetched
            //array of secrets we want to change state to
            return action.payload
        case 'secrets/new':
            //this one assumes that the action's payload is a new secret we
            //want to add to the array.
            return [ ...state, action.payload ]
        case 'secrets/update':
            //this one assumes that the action's payload is an existing
            //secret that we just changed
            console.log( 'previous value of state', state )
            const newState = state.map( s => {
                if( s.id === action.payload.id ) {
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
