import { useSelector, useDispatch } from 'react-redux'


function App() {


  // the return value of the callback we give to useSelector, is what the
  // variable gets assigned to.
  const secrets = useSelector( ourState => {
    
    return ourState.secrets
    
  } )


  // to dispatch an action, we need a special function that does just that, 
  // given to use by useDispatch
  const dispatch = useDispatch()


  const addSecret = () => {

    const newAction = {
      type: 'secrets/new',
      payload: {
        id: 2,
        content: 'so much secret!'
      }
    }

    dispatch( newAction )

  }

  return (
    <div>
      <button onClick={ addSecret }>
        ADD A HARD CODED SECRET!
      </button>
      { secrets.map( s => {
        return <div>{ s.content }</div>
      } ) }
    </div>
  );
}

export default App;
