/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Title(props) {
  const { setResults, setQuery } = props;
  function handleClick() {
    setResults([]);
    setQuery(null);
  }
  return (
    <Link style={{ textDecoration: 'none' }} onClick={handleClick} to="/">
      <h1>I Think You Should Meme</h1>
    </Link>
  );
}
Title.propTypes = {
  setResults: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Title;
