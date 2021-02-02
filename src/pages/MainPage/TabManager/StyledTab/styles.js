import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( ( theme ) => ( {
    tabItem: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem( 15 ),
        marginRight: theme.spacing( 1 ),
        '&:.cus': {
            opacity: 1,
        },
    }
} ) );

export default useStyles;
