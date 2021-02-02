import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    pageHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageTitle: {
        // textAlign: 'center',
        fontFamily: 'Garamond',
        fontSize: '3rem',
    },
    loginButton: {
        position: 'absolute',
        color: 'white',
        top: 20,
        right: 10,
        // display: 'flex',
        justifySelf: 'center',
        // alignSelf: 'center',
        fontSize: '1rem',
        fontFamily: 'Serif',
    },
    searchBox: {
        // display: 'flex',
        // justifyContent: 'center',
    },
    tabs: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing( 3 ),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },

} ) );

export default useStyles;
