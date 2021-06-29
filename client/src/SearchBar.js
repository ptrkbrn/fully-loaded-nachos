import React, { useEffect, useState } from 'react';

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
    // const imgs =
    //     results.length > 0 ? 
    //     Array.from(results).map(result => {
    //         return (
    //             <div dispaly="grid">
    //                 <img height="auto" width="500px" margin="10px" src={result.url} />
    //                 <p>{result.text}</p>
    //             </div>
    //         )

    //     }) :
    //     query ?
    //     "No results found!" :
    //     "Results appear here."
        
    return(
        <div>
            <input onChange={onChange} type="text"></input>
            {/* {imgs} */}
        </div>
    )
}

export default SearchBar;
