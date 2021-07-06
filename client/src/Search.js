/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';

function Search(props) {
  const { searching, results } = props;
  return (
    if (searching) {
      <h1>Loading...</h1>
    } else if (!searching && query && results.length === 0) {
      <h1>Nothing found!</h1>
    } else {
      <ImageContainer images={results} />
    }
  );
}
Search.propTypes = {
  searching: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default Search;
