import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

function useFetch ( Request ) {
    const [ res, setRes ] = useState( '' );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    const fetchMovies = useCallback( async () => {
        try {
            setLoading( true );
            const { data } = await api.get( Request );
            if ( data ) {
                setRes( data );
                setLoading( false );
            }
        }
        catch ( e ) {
            setLoading( false );
            setError( e );
            setRes( '' );
        }
    }, [ Request ] );

    useEffect( () => {
        fetchMovies();
    }, [ fetchMovies ] );

    return [ res, loading, error ];
}

export default useFetch;
