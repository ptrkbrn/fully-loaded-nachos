import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';

const StyledInput = styled.input`
border-radius: 50px;
height: 2em;
width: 80%;
margin: .75em;
padding: .5em 2em;
border: none;
`;

function SearchBar(props) {
  const [query, setQuery] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const { setResults } = props;
  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set('q', query);
    if (query !== null && location.pathname === '/') {
      window.history.pushState({}, '', url);
      if (query.length > 2) {
        fetch(`http://localhost:9000/search?${url.searchParams}`, {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
          })
          .catch((error) => console.log(error));
      }
    } else {
      url.searchParams.delete('q');
      window.history.pushState({}, '', url);
    }
  }, [query, location]);
  const onChange = (e) => {
    history.replace('/');
    if (e.target.value.length > 0) {
      setQuery(e.target.value);
    } else {
      setQuery(null);
      setResults([]);
    }
  };

  return (
    <StyledInput onChange={onChange} type="text" />
  );
}
SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default SearchBar;
