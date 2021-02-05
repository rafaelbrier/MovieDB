import React from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import useStyles from './styles';

const Popular = () => {
    const [ movieList, loading, error ] = useFetch( apiData.popular );
    const styles = useStyles();

    return (
        <div className={ styles.root }>
            { loading && <Loading /> }
            { error && <Error Message={ error } /> }
            { !loading && !error &&
                <>
                    <h1>Popular Movies</h1>
                    <MovieList list={ movieList } />
                </>
            }
        </div>
    );
}

export default Popular;
