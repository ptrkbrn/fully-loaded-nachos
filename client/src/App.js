import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ImageContainer from './ImageContainer';

function App(props) {
  // useEffect(() => {
  //   fetch("http://localhost:9000/")
  //   .then(res => res.text())
  //   .then(res => console.log(res));   
  // })
  const [results, setResults] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontFamily: 'Cooper Black'}}>I Think You Should Meme</h1>
        <SearchBar history={window.history} setResults={setResults} />
      </header>
        <ImageContainer images={results} />
    </div>
  );
}

export default App;
