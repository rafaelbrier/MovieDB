import React from 'react';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const TopRated = () => {
    const [ movieList, loading, error ] = useFetch( apiData.topRated );
    console.log( movieList );

    return (
        <>
            { loading && <p>Loading</p> }
            { error && <p>Erro</p> }
            <h1>TopRated Movies</h1>
        </>
    );
}

export default TopRated;
