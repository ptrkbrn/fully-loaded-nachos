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
import About from './About.js';
import ImageView from './ImageView';
import Header from './Header';
import Footer from './Footer';

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
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/screenshots/:episode/:timestamp">
            <ImageView images={results} />
          </Route>
          <Route exact path="/">
            <Search results={results} searching={searching} query={query} />
          </Route>
        </Switch>
        {!query && results.length === 0 && !searching && <Footer />}
      </div>
    </Router>
  );
}

export default App;
