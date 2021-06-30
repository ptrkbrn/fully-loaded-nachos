import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './SearchBar';
import ImageContainer from './ImageContainer';
import ImageView from './ImageView';

function App(props) {
  // useEffect(() => {
  //   fetch("http://localhost:9000/")
  //   .then(res => res.text())
  //   .then(res => console.log(res));   
  // })
  const [results, setResults] = useState([])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{fontFamily: 'Cooper Black'}}>I Think You Should Meme</h1>
          <SearchBar history={window.history} setResults={setResults} />
        </header>
        <Switch>
          <Route path="/screenshots/:episode/:timestamp">
            <ImageView images={results} />
          </Route>
          <Route exact path="/">
            <ImageContainer images={results} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
