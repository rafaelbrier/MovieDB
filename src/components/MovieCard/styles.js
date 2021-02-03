import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( {
    root: {
        minWidth: 275,
        backgroundColor: 'black',
        color: 'white ',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    nota: {
        fontSize: 14,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    image: {
        width: 350,
        heigh: 350,
    }
} );

export default useStyles;
