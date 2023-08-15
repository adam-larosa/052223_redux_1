

let initialState = 'potato'

// The "instructions" on how to change state, is called an "action"

const firstAction = {
    type: "change/potato",
    payload: 'this will be the string we change "state" to'
}


// The function that changes state is called a "reducer"
/*
    WHATEVER THE RETURN VALUE OF OUR REDUCER IS, IS WHAT STATE WILL BE
    CHANGED TO
*/
function reducer( state = initialState, action ) {
    if( action.type == 'change/potato' ) {
        return action.payload
    } else if( action.type == 'change/meow' ) {
        return 'meow'
    }
     else {
        return state
    }
}

console.log( 'first value of state?', initialState )

const newState = reducer( initialState, firstAction )

console.log( 'do we have new state?', newState )

const anotherAction =  { type: 'change/meow' }

const newState2 = reducer( newState, anotherAction )

console.log( 'changed to meow?', newState2 )