import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login, reset, double} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch= useDispatch();

  return (
    <div className="container text-center">
      <h1>Redux Counter App</h1>
      <h1>Counter is {counter}</h1>
      <button className="btn btn-lg btn-info" onClick={()=>dispatch(increment())}>+</button>
      <button className="btn btn-lg btn-dark ml-1" onClick={()=>dispatch(decrement())}>-</button>
      <button className="mybtn btn btn-lg btn-success mt-2" onClick={()=>dispatch(double())}>Double</button>
      <button className="mybtn btn btn-lg btn-danger mt-2" onClick={()=>dispatch(reset())}>RESET</button>

      <button className={`mybtn btn btn-lg mt-3 ${isLogged ? 'btn-danger':'btn-primary'}`} onClick={()=>dispatch(login())}>
        {isLogged? <p>LOGOUT</p>: <p>LOGIN</p>}
      </button>
      <br/>
      {isLogged? <h3>You're logged in</h3>:''}
    </div>
  );
}

export default App;
