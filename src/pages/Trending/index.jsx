import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import useStyles from './styles';

const Trending = () => {
    const [ mvList, mvloading, mvError, fetchMvList ] = useFetch( apiData.trending( "movie" ) );
    const [ tvList, tvLoading, tvError, fetchTvList ] = useFetch( apiData.trending( "tv" ) );
    const [ page, setPage ] = useState( 1 );
    const styles = useStyles();

    function isLoading () {
        return mvloading || tvLoading;
    }

    function hasError () {
        return mvError || tvError;
    }

    useEffect( () => {
        fetchMvList( apiData.trending( "movie" ) );
        fetchTvList( apiData.trending( "tv" ) );
    }, [ page, fetchMvList, fetchTvList ] );

    return (
        <div className={ styles.root }>
            { isLoading() && <Loading /> }
            { !isLoading() && hasError() && <Error Message={ mvError || tvError } /> }
            { !isLoading() && !hasError() &&
                <>
                    <h1>Trending</h1>
                    <h2>Movies</h2>
                    <MovieList list={ mvList } />
                    <h2>TV Shows</h2>
                    <MovieList list={ tvList } />
                </>
            }
        </div>
    );
}

export default Trending;
