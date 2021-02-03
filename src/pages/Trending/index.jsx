import React from 'react';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';


const Trending = () => {
    const [ movieList, loading, error ] = useFetch( apiData.trending( "all" ) );

    console.log( movieList );
    return (
        <>
            { loading && <p>Loading</p> }
            { error && <p>Erro</p> }
            <h1>Trending</h1>
        </>
    );
}

export default Trending;
