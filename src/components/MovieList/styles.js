import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( {
    root: {
        display: 'inline-flex',
        position: 'relative',
        // flexWrap: 'wrap',
    },
    nextPageButton: {
        position: 'absolute',
        right: 1,
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
    },
    prevPageButton: {
        position: 'absolute',
        left: 1,
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
    },
    iconSize: {
        fontSize: '2.5rem',
        paddingLeft: '5px',
    },
} );

export default useStyles;
