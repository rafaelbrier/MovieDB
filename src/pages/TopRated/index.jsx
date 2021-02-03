import React from 'react';
import If from '../../components/If';
import MovieCard from '../../components/MovieCard';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const TopRated = () => {
    const [ movieList, loading, error ] = useFetch( apiData.topRated );

    const listaSimples = movieList !== '' ? movieList.results.slice( 0, 5 ) : [];


    return (
        <>
            { loading && <p>Loading</p> }
            { error && <p>Erro</p> }
            <h1>TopRated Movies</h1>
            <If condition={ movieList }>
                { listaSimples.map( ( movie, index ) => (
                    < MovieCard key={ index } movie={ movie } />
                ) ) }
            </If>
        </>
    );
}

export default TopRated;
