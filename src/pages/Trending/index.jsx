import React from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import useStyles from './styles';


const Trending = () => {
    const [ mvList, mvloading, mvError ] = useFetch( apiData.trending( "movie" ) );
    const [ tvList, tvLoading, tvError ] = useFetch( apiData.trending( "tv" ) );
    const styles = useStyles();

    function isLoading () {
        return mvloading || tvLoading;
    }

    function hasError () {
        return mvError || tvError;
    }

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
