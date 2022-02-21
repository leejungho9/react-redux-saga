import logo from './logo.svg';
import './App.css';
import users from './redux/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './action';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state)=> state.users.loading);
  const error = useSelector((state)=> state.users.error);

  useEffect(()=> {
    dispatch(getUser());
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          {loading && <h2>Loading...</h2>}
          {error && !loading && <h2>{error}</h2>}
          {users.map((user, i) => <h1>{user.name}</h1>)} 
 
        </div>
      </header>
    </div>
  );
}

export default App;
