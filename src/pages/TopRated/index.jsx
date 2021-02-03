import React from 'react';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const TopRated = () => {
    const [ movieList, loading, error ] = useFetch( apiData.topRated );

    const lista = movieList !== '' ? movieList.results : [];

    return (
        <>
            { loading && <p>Loading</p> }
            { error && <p>Erro</p> }
            <h1>TopRated Movies</h1>
            <MovieList list={ lista } />
        </>
    );
}

export default TopRated;
