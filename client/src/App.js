/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Search from './Search';
import ImageView from './ImageView';
import Header from './Header';

function App() {
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
