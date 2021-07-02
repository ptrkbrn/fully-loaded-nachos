import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import SearchBar from './SearchBar';
import ImageContainer from './ImageContainer';
import ImageView from './ImageView';
import Header from './Header';
import Title from './Title';

function App() {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header className="App-header">
          <Link style={{ textDecoration: 'none' }} to="/">
            <Title>I Think You Should Meme</Title>
          </Link>
          <SearchBar history={window.history} setResults={setResults} />
        </Header>
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
