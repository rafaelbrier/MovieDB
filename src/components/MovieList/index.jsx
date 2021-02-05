import React, { useContext, useMemo, useState } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import DataContext from '../store/Context';

const moviesPorPag = 5;

const MovieList = ( { list } ) => {
    const styles = useStyles();
    const [ pag, setPag ] = useState( 0 );
    const { baseUrl, backdropSizes } = useContext( DataContext );

    const listaExibida = useMemo( () => {
        let inicial = pag * moviesPorPag;
        let final = pag * moviesPorPag + moviesPorPag;
        return list.slice( inicial, final );
    }, [ pag, list ] );

    // const onLoadArray = useMemo( () => {
    useMemo( () => {
        let array = [];
        if ( list.length > 0 ) {
            list.forEach( ( movie ) => {
                const img = new Image();
                img.src = baseUrl + backdropSizes + movie.backdrop_path;
                // img.onload = () => {
                //     array.push( img );
                // }
            } );
            return array;
        }
    }, [ list, baseUrl, backdropSizes ] );

    // useEffect( () => {
    //     if ( list.length ) {
    //         const completo = onLoadArray.length === list.length;
    //         console.log( "array completo:", completo );
    //     }
    // }, [ onLoadArray, list ] );

    // function getImage ( index ) {
    //     return imageArray[ pag * moviesPorPag + index ];
    // }

    function getImage ( movie ) {
        return baseUrl + backdropSizes + movie.backdrop_path;
    }

    function changePage ( page ) {
        if ( page === 'next' && pag + 1 < list.length / moviesPorPag )
            setPag( ( pag ) => pag + 1 );
        if ( page === 'prev' && pag - 1 >= 0 )
            setPag( ( pag ) => pag - 1 );
    }


    if ( list.length > 0 ) {
        return (
            <div className={ styles.root }>
                { listaExibida.map( ( movie, index ) => (
                    <MovieCard key={ index } movie={ movie } img={ getImage( movie ) } />
                ) ) }
                <IconButton className={ styles.nextPageButton } aria-label="next" onClick={ () => changePage( 'next' ) }>
                    <ArrowForwardIosIcon className={ styles.iconSize } />
                </IconButton>
                <IconButton className={ styles.prevPageButton } aria-label="prev" onClick={ () => changePage( 'prev' ) }>
                    <ArrowBackIosIcon className={ styles.iconSize } />
                </IconButton>
            </div>
        );
    }
    return null;
}

export default MovieList;
