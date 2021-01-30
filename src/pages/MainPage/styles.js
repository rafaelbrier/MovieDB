import { Tab, Tabs } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( ( theme ) => ( {
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

// export const StyledTabs = withStyles( {
//     indicator: {
//         display: 'flex',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         '& > span': {
//             maxWidth: 40,
//             width: '100%',
//             backgroundColor: 'red',
//         },
//     },
// } )( ( props ) => <Tabs { ...props } TabIndicatorProps={ { children: <span /> } } /> );

// export const StyledTab = withStyles( ( theme ) => ( {
//     root: {
//         textTransform: 'none',
//         color: '#fff',
//         fontWeight: theme.typography.fontWeightRegular,
//         fontSize: theme.typography.pxToRem( 15 ),
//         marginRight: theme.spacing( 1 ),
//         '&:focus': {
//             opacity: 1,
//         },
//     },
// } ) )( ( props ) => <Tab disableRipple { ...props } /> );
