/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';

function Search(props) {
  const { searching, results } = props;
  return (
    searching
      ? <h1>Loading...</h1>
      : <ImageContainer images={results} />
  );
}
Search.propTypes = {
  searching: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default Search;
