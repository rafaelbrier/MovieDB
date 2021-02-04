import React, { useContext } from 'react';
import MovieList from '../../components/MovieList';
import DataContext from '../../components/store/Context';

const Favorites = () => {
    const { listaFavoritos } = useContext( DataContext );

    return (
        <>
            <h1>Favorites</h1>
            {listaFavoritos.length === 0 && <h3>Lista de Favoritos Vazia</h3> }
            <MovieList list={ listaFavoritos } />
        </>
    );
}

export default Favorites;
