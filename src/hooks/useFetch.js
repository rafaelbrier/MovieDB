import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

function useFetch ( Request ) {
    const [ res, setRes ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( false );

    const fetchMovies = useCallback( async () => {
        try {
            setLoading( true );
            const { data } = await api.get( Request );
            if ( data ) {
                setTimeout( () => {
                    setLoading( false );
                }, 1000 );
                setRes( data );
            }
        }
        catch ( e ) {
            setTimeout( () => {
                setLoading( false );
                setError( 'Falha ao acessar a lista' );
            }, 1000 );
        }
    }, [ Request ] );

    useEffect( () => {
        fetchMovies();
    }, [ fetchMovies ] );

    return res.results ? [ res.results, loading, error ] : [ [], loading, error ];
}

export default useFetch;
