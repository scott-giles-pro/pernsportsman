import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import HomePage from "./pages/HomePage.js";

function App() {
  const [homeArray, setHomeArray] = useState([{
    name: '',
    description: '',
    images: '',
    notes: ''
  }])

  useEffect(() => {
    fetch('https://8000/')
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => setHomeArray(data.saltfish))
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          `Hello, sir.`
        </p>
        
      </header>
    </div>
  );
}

export default App;
