import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import useStyles from './styles';

const TopRated = () => {
    const [ movieList, loading, error, fetchMovies ] = useFetch();
    const [ page, setPage ] = useState( 1 );
    const styles = useStyles();

    useEffect( () => {
        fetchMovies( apiData.topRated( page ) );
    }, [ page, fetchMovies ] );

    return (
        <div className={ styles.root }>
            { loading && <Loading /> }
            { error && <Error Message={ error } /> }
            { !loading && !error &&
                <>
                    <h1>TopRated Movies</h1>
                    <MovieList list={ movieList } />
                </>
            }
        </div>
    );
}

export default TopRated;
