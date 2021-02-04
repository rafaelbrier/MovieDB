import { createContext } from 'react';

const DataContext = createContext( {
    configuration: null,
    baseUrl: null,
    backdropSizes: '',
    listaFavoritos: [],
    setListaFavoritos: () => { },
} );

export default DataContext;
