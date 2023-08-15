import { useSelector, useDispatch } from 'react-redux'

import { addSecret, fetchSecrets } from './reducers/secretsReducer'

import { useState, useEffect } from 'react'

function App() {

  // to dispatch an action, we need a special function that does just that, 
  // given to use by useDispatch
  const dispatch = useDispatch()

  useEffect( () => {
  
    /* could we dispatch an action, that does a fetch and updates state
       with the response of the fetch */


    /* up until we brought in Thunk, all 'aciton' were nothing more than
       JavaScript objects.  With Thunk, we can dispatch a function instead.  */

    dispatch( fetchSecrets() )
    

  }, [])


  // the return value of the callback we give to useSelector, is what the
  // variable gets assigned to.
  const secrets = useSelector( ourState => {
    
    return ourState.secrets
    
  } )




  const [ input_value, setInput ] = useState( '' )



  
  const handleSecret = () => {
    // addSecret has a return value of that JavaScript object which is our 
    // 'action'
    const newAction = addSecret( input_value )
    dispatch( newAction )
  }


  return (
    <div>
      <input onChange={ e => setInput( e.target.value ) }/>
      <button onClick={ handleSecret }>
        add our secret!
      </button>
      { secrets.map( s => {
        return <div>{ s.content }</div>
      } ) }
    </div>
  );
}

export default App;
