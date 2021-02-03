import React, { useMemo, useState } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

const moviesPorPag = 5;

const MovieList = ( { list } ) => {
    const styles = useStyles();
    const [ pag, setPag ] = useState( 0 );

    const listaExibida = useMemo( () => {
        let inicial = pag * moviesPorPag;
        let final = pag * moviesPorPag + moviesPorPag;
        console.log( list );
        return list.slice( inicial, final );
    }, [ pag, list ] );

    function changePage ( page ) {
        if ( page === 'next' && pag + 1 < list.length / moviesPorPag )
            setPag( ( pag ) => pag + 1 );
        if ( page === 'prev' && pag - 1 >= 0 )
            setPag( ( pag ) => pag - 1 );
    }

    return (
        <>
            <div className={ styles.root }>
                { listaExibida.map( ( movie, index ) => (
                    <MovieCard key={ index } movie={ movie } />
                ) ) }
                <IconButton className={ styles.nextPageButton } aria-label="next" onClick={ () => changePage( 'next' ) }>
                    <ArrowForwardIosIcon className={ styles.iconSize } />
                </IconButton>
                <IconButton className={ styles.prevPageButton } aria-label="prev" onClick={ () => changePage( 'prev' ) }>
                    <ArrowBackIosIcon className={ styles.iconSize } />
                </IconButton>
            </div>
        </>
    );
}

export default MovieList;
