import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useMemo, useState, useRef, useLayoutEffect, useCallback } from 'react';
import MovieCard from '../MovieCard';
import { useDataContext } from '../store/Provider';
import useStyles from './styles';
import clsx from 'clsx';

const MOVIES_REND_PER_PAGE = 10;
const MOVIES_ON_SCREEN = 5;

const MovieList = ({ list }) => {
    const styles = useStyles();
    const carrouselRef = useRef();
    const [page, setPage] = useState(0);
    const { baseUrl, backdropSizes } = useDataContext();
    // const [ imagesLoaded, setImagesLoaded ] = useState( false );
    // const [ countLoaded, setCountLoaded ] = useState( 0 );
    // const [ imgArray, setImgArray ] = useState( [] );

    // const onLoadArray = useMemo( () => {
    // useMemo( () => {
    //     let array = [];
    //     if ( list.length > 0 ) {
    //         list.forEach( ( movie ) => {
    //             const img = new Image();
    //             img.src = baseUrl + backdropSizes + movie.backdrop_path;
    //             console.log( "buscando imagem" );
    //             img.onload = () => {
    //                 console.log( "imagem carregada" );
    //                 array.push( '1' );
    //                 setCountLoaded( ( count ) => count + 1 );
    //                 setImgArray( [ ...imgArray, img ] );
    //             }
    //         } );
    //         return array;
    //     }
    // }, [ list, baseUrl, backdropSizes ] );

    // useEffect( () => {
    //     console.log( onLoadArray );
    //     console.log( onLoadArray.length );
    //     if ( onLoadArray.length === 20 )
    //         setImagesLoaded( true );
    // }, [ onLoadArray, setImagesLoaded ] );

    // useEffect( () => {
    //     console.log( countLoaded );
    //     if ( countLoaded === 20 )
    //         setImagesLoaded( true );
    // }, [ countLoaded, setImagesLoaded ] );

    // useEffect( () => {
    //     console.log( imgArray );
    //     if ( imgArray.length === 20 )
    //         setImagesLoaded( true );
    // }, [ imgArray, setImagesLoaded ] );

    // function getImage ( index ) {
    //     return imgArray[ pag * moviesPorPag + index ];
    // }

    const getImage = useCallback((movie) => baseUrl + backdropSizes + movie.backdrop_path, [baseUrl, backdropSizes]);

    const scrollCarrousel = useCallback((_page) => {
        if (carrouselRef.current) {
            const step = carrouselRef.current.offsetWidth;
            carrouselRef.current.scrollLeft = _page * step;

            // const widthStep = windowSize.width * ((CARD_WIDTH_VW + (CARD_MARGIN_VW / 2) * 0.75) / 100);
            // const widthToScroll = widthStep * _activeStep + fatorCorrecao(windowSize.width, _activeStep);
            // carrouselRef.current.scrollLeft = widthToScroll;
        }
        // if (page === 'next' && pag + 1 < list.length / moviesPorPag) setPag((pag) => pag + 1);
        // if (page === 'prev' && pag - 1 >= 0) setPag((pag) => pag - 1);
    }, []);

    const MovieCardList = useMemo(
        () => (list || []).map((movie, index) => <MovieCard key={index} movie={movie} img={getImage(movie)} />),
        [list, getImage],
    );

    useLayoutEffect(() => {
        scrollCarrousel(page);
        console.log('CURRENT_PAGE', page);
    }, [scrollCarrousel, page]);

    const isFinal = (list.length ? list.length / 5 : 0) - 1;
    if (list.length > 0) {
        return (
            <div className={styles.root} ref={carrouselRef}>
                {MovieCardList}
                <IconButton
                    className={clsx(styles.pageButton, styles.nextPageButton)}
                    classes={{ disabled: styles.iconDisabled }}
                    aria-label='next'
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page === isFinal}
                >
                    <ArrowForwardIosIcon className={styles.iconSize} />
                </IconButton>
                <IconButton
                    className={clsx(styles.pageButton, styles.prevPageButton)}
                    classes={{ disabled: styles.iconDisabled }}
                    aria-label='prev'
                    onClick={() => setPage((p) => p - 1)}
                    disabled={page === 0}
                >
                    <ArrowBackIosIcon className={styles.iconSize} />
                </IconButton>
            </div>
        );
    }
    return null;
};

export default MovieList;
