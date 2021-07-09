/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import GlobalStyle from './GlobalStyle';
import Search from './Search';
import About from './About';
import ImageView from './ImageView';
import Header from './Header';

const TRACKING_ID = 'G-DHTRKSW6CP';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState(null);
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header
          setResults={setResults}
          setSearching={setSearching}
          query={query}
          setQuery={setQuery}
        />
        <Switch>
          <Route path="/screenshots/:episode/:timestamp">
            <ImageView images={results} />
          </Route>
          <Route exact path="/">
            <Search results={results} searching={searching} query={query} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
