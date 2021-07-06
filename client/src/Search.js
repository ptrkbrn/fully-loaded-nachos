/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';

function Search(props) {
  const { searching, results, query } = props;
  let pageContent;
  if (searching) {
    pageContent = <h1>Loading...</h1>;
  } else if (!searching && query && results.length === 0) {
    pageContent = <h1>Nothing found!</h1>;
  } else {
    pageContent = <ImageContainer images={results} />;
  }
  return (
    { pageContent }
  );
}
Search.propTypes = {
  searching: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
