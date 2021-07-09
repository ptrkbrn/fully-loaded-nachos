/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';
import Footer from './Footer';

function Search(props) {
  const { searching, results, query } = props;
  let pageContent = <h1>Search a quote to get started.</h1>;
  if (searching) {
    pageContent = <h1>Loading...</h1>;
  } else if (!searching && query && results.length === 0) {
    pageContent = <h1>Nothing found!</h1>;
  } else {
    pageContent = <ImageContainer images={results} />;
  }
  return (
    <>
      {pageContent}
      <Footer />
    </>
  );
}
Search.propTypes = {
  searching: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
