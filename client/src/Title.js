/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = styled.h1`
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-family: 'Cooper Black'
`;

function Title(props) {
  const { setResults, setQuery } = props;
  function handleClick() {
    setResults([]);
    setQuery(null);
  };
  return (
    <Link style={{ textDecoration: 'none' }} to="/">
      <StyledTitle onClick={handleClick}>I Think You Should Meme</StyledTitle>
    </Link>
  );
}
Title.propTypes = {
  setResults: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Title;
