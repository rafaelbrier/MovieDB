import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        // flexWrap: 'wrap',
        scrollBehavior: 'smooth',
        overflow: 'hidden',
    },
    pageButton: {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
        zIndex: 2,
        padding: 0,
    },
    nextPageButton: {
        right: 1,
    },
    prevPageButton: {
        left: 1,
    },
    iconSize: {
        fontSize: '2.5rem',
    },
    iconDisabled: {
        color: 'darkgray !important',
    },
});

export default useStyles;
