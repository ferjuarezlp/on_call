
import React, { Component, useState, useEffect }   from 'react'
import './App.css';
import uuid from 'react-uuid'

function App() {
  //const [date, setDate] = useState(null);

  const [uniqueId] = useState(
    localStorage.getItem('uniqueId') || ''
  );

  useEffect(() => {
    localStorage.setItem('uniqueId', uuid());

  }, []);

  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h1>Unique ID is {uniqueId}</h1>
      
      
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <br />
      <h2>The date according to Go is:</h2>
      
    </main>
  );
  
}

  
  


export default App;
