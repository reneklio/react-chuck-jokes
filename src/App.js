import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

export default function App() {

  const [joke, setJoke] = useState("Chuck is away :(");

  const fetchJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then(response => response.json())
      .then(response => setJoke(response.value))
      .catch(error => console.error(error));
  };

  useEffect(() => { setJoke("Chuck is away :(") }, []);

  return <div className="App">
    <div className='container'>
      <h1>
        Chuck's territory!
      </h1>
      <button onClick={() => fetchJoke()} className="button-joke">Ask him for joke</button>
      <p>{joke}</p>
    </div>
  </div >
}