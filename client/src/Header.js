/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from './Title';
import SearchBar from './SearchBar';

const StyledHeader = styled.header`
    background-color: #282c34;
    display: flex;
    flex-directon: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

function Header(props) {
  const [query, setQuery] = useState(null);
  const { setResults } = props;
  return (
    <StyledHeader className="App-header">
      <Title setResults={setResults} setQuery={setQuery} />
      <SearchBar
        history={window.history}
        setResults={setResults}
        query={query}
        setQuery={setQuery}
      />
    </StyledHeader>
  );
}
Header.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default Header;
