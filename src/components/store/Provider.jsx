import React, { useCallback, useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import apiData from '../../services/apiData';
import DataContext from './Context';
import useStorage from '../../hooks/useStorage'

const DataProvider = ( { children } ) => {
    const [ listaFavoritos, setListaFavoritos ] = useStorage( 'listaFavoritos' );
    const [ configuration, setConfiguration ] = useState( null );
    const backdropSizes = 'original';


    const baseUrl = useMemo( () => {
        return configuration ? configuration.data.images.base_url : null;
    }, [ configuration ] );

    const getConfiguration = useCallback( async () => {
        try {
            const config = await api.get( apiData.config );
            setConfiguration( config );
        } catch ( err ) {
            const error = 'Erro app -> getConfiguration; Erro: ' + err;
            console.log( error );
            throw err;
        }
    }, [] );

    useEffect( () => {
        getConfiguration();
    }, [ getConfiguration ] );

    useEffect( () => {
        setListaFavoritos( [] );
    }, [ setListaFavoritos ] );



    return (
        <DataContext.Provider
            value={ {
                configuration,
                baseUrl,
                backdropSizes,
                listaFavoritos,
                setListaFavoritos,
            } }
        >
            {children }
        </DataContext.Provider>
    );
}

export default DataProvider;
