import React from 'react';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const Popular = () => {
    const [ movieList, loading, error ] = useFetch( apiData.popular );
    console.log( movieList );
    return (
        <>
            { loading && <p>Loading</p> }
            { error && <p>Erro</p> }
            <h1>Popular Movies</h1>
        </>
    );
}

export default Popular;
