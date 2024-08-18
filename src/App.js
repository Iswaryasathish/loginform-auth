import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="app">
      {!authenticated ? (
        <div>
          <Signup setAuthenticated={setAuthenticated} />
          <Login setAuthenticated={setAuthenticated} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;



    
