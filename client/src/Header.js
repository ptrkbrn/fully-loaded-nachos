/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './Title';
import SearchBar from './SearchBar';

const StyledHeader = styled.header`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    box-sizing: border-box;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
        padding: 1em;
    }
`;

function Header(props) {
  const {
    setResults,
    setSearching,
    query,
    setQuery,
  } = props;
  return (
    <StyledHeader className="App-header">
      <Title setResults={setResults} setQuery={setQuery} query={query} />
      <SearchBar
        history={window.history}
        setResults={setResults}
        query={query}
        setQuery={setQuery}
        setSearching={setSearching}
      />
    </StyledHeader>
  );
}
Header.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  setSearching: PropTypes.func.isRequired,
};

export default Header;
