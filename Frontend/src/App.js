import './App.css';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Homepage } from './Components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register/>}></Route>
        <Route path='/login' element={loggedIn &&loggedIn._id ? <Homepage setLoggedIn = {setLoggedIn}/> : <Login setLoggedIn = {setLoggedIn}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
