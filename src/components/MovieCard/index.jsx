import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import apiData from '../../services/apiData';
import useStyles from './styles';

const MovieCard = ( { movie, img } ) => {
    const styles = useStyles();

    return (
        <Card className={ styles.root }>
            <CardContent className={ styles.cardContent }>
                <Typography className={ styles.title }  >
                    { movie.original_title }
                </Typography>
                <img className={ styles.image } src={ img } alt={ `${ movie.original_title }_img` } />
                <div className={ styles.nota }>
                    {/* <p>Generos:</p> */ }
                    <p>Nota: { movie.vote_average }/10</p>
                    <p>Total de votos: { movie.vote_count }</p>
                </div>
            </CardContent>
        </Card >
    );
}

export default MovieCard;
