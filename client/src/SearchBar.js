import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const StyledInput = styled.input`
border-radius: 50px;
height: 2em;
width: 80%;
margin: .75em;
padding: .5em 2em;
border: none;
`


function SearchBar(props) {
    const [query, setQuery] = useState(null)
    // const [results, setResults] = useState([])
    useEffect(() => {
        const url = new URL(window.location);
        url.searchParams.set('q', query);
        console.log(query === null)
        console.log(query)
        if (query !== null) {
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
                .then(res => {
                    return res.json();
                })
                .then(function(data) {
                    props.setResults(data);
                    console.log(data);
                })
                .catch(error => console.log(error))           
            }
        } else {
            url.searchParams.delete('q');
            window.history.pushState({}, '', url);
        }
    }, [query])
    const onChange = (e) => {
        if (e.target.value.length > 0) {
            setQuery(e.target.value)
        } else {
            setQuery(null)
            props.setResults([])
        }
    }
        
    return(
            <StyledInput onChange={onChange} type="text"></StyledInput>
    )
}

export default SearchBar;