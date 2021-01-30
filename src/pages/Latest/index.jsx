import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import apiData from '../../services/apiData';

// async function buscaLancamento () {
//     try {
//         return await api.get( apiData.latest );
//     }
//     catch ( err ) {
//         const error = 'Erro app -> buscaLancamentos; Erro: ' + err;
//         console.log( error );
//         throw err;
//     }
// }

const Latest = () => {
    // const [ movieList, setMovieList ] = useState( [] );

    // const fetchMovies = useCallback( async () => {
    //     const res = await buscaLancamento();
    //     console.log( res );
    // }, [] );

    // useEffect( () => {
    //     fetchMovies();
    // }, [ fetchMovies ] );

    return (
        <h1>Pagina de Lançamentos</h1>
    );
}

export default Latest;
