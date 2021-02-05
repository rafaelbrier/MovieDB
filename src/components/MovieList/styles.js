import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( {
    root: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        // flexWrap: 'wrap',
    },
    nextPageButton: {
        position: 'absolute',
        right: 1,
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
        zIndex: 2,
        padding: 0,
    },
    prevPageButton: {
        position: 'absolute',
        left: 1,
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
        zIndex: 2,
        padding: 0,
    },
    iconSize: {
        fontSize: '2.5rem',
    },
} );

export default useStyles;
