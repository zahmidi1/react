import React from 'react';
import './App.css';
import Navbar from './components/partiais/Navbar';
import User from './components/User';

function App() {
  return ( 

    <div className="App">
      <Navbar />
      <div className="container mt-2">
        <User />
      </div>
    
    </div>
  
    
  );
}

export default App;
