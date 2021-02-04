import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import StarButton from '../StarButton/indes';
import DataContext from '../store/Context';
import useStyles from './styles';

const MovieCard = ( { movie, img } ) => {
    const styles = useStyles();
    const { listaFavoritos, setListaFavoritos } = useContext( DataContext );

    function toogleFavorito () {
        const favorito = listaFavoritos.some( ( mov ) => mov.id === movie.id );
        if ( favorito ) {
            listaFavoritos.splice( listaFavoritos.indexOf( movie ), 1 );
            setListaFavoritos( [ ...listaFavoritos ] );
        }
        else {
            setListaFavoritos( [ ...listaFavoritos, movie ] );
        }
    }

    function isFilled () {
        return listaFavoritos.some( ( mov ) => mov.id === movie.id );
    }

    return (
        <Card className={ styles.root }>
            <CardContent className={ styles.cardContent }>
                <Typography className={ styles.title }  >
                    { movie.original_title }
                </Typography>
                <img className={ styles.image } src={ img } alt={ `${ movie.original_title }_img` } />
                <div className={ styles.inferior }>
                    <div className={ styles.nota }>
                        <p>Nota: { movie.vote_average }/10</p>
                        <p>Total de votos: { movie.vote_count }</p>
                    </div>
                    <IconButton className={ styles.botaoFavoritar } onClick={ toogleFavorito }>
                        <StarButton filled={ isFilled() } />
                    </IconButton>
                </div>
            </CardContent>
        </Card >
    );
}

export default MovieCard;
