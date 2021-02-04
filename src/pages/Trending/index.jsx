import React from 'react';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';


const Trending = () => {
    const [ mvList, mvloading, mvError ] = useFetch( apiData.trending( "movie" ) );
    const [ tvList, tvLoading, tvError ] = useFetch( apiData.trending( "tv" ) );

    const mvLista = mvList !== '' ? mvList.results : [];
    const tvLista = tvList !== '' ? tvList.results : [];

    console.log( "trending", mvList );

    return (
        <>
            <h1>Trending</h1>
            <h2>Movies</h2>
            { mvloading && <p>Loading</p> }
            { mvError && <p>Erro</p> }
            <MovieList list={ mvLista } />
            <h2>TV Shows</h2>
            { tvLoading && <p>Loading</p> }
            { tvError && <p>Erro</p> }
            <MovieList list={ tvLista } />
        </>
    );
}

export default Trending;
