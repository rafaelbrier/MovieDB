import React from 'react';
import If from '../../components/If';
import MovieCard from '../../components/MovieCard';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const Latest = () => {
    const [ movie, loading, error ] = useFetch( apiData.latest );
    console.log( movie );
    return (
        <>
            {loading && <p>Loading</p> }
            {error && <p>Erro</p> }
            <h1>Pagina de Lançamentos:</h1>
            <h3>Lançamento de hoje:</h3>
            <If condition={ movie }>
                <MovieCard movie={ movie } />
            </If>
        </>
    );
}

export default Latest;
