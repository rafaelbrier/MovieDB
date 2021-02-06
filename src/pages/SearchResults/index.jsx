import React from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useStyles from './styles'

const SearchResults = ( { searchListProps } ) => {
    const { searchList, loading, error } = searchListProps;
    const styles = useStyles();

    function showError () {
        return error || ( !loading && searchList.length === 0 );
    }

    return (
        <div className={ styles.root }>
            { loading && <Loading /> }
            { showError() && <Error Message={ 'Filme não encontrado' } /> }
            { !loading && !showError() &&
                <>
                    <h1>Filmes Encontrados:</h1>
                    <MovieList list={ searchList } />
                </>
            }
        </div>
    );
}

export default SearchResults;
