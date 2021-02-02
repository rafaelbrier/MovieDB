import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( () => ( {
    tabMenu: {
        indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > span': {
                maxWidth: 40,
                width: '100%',
                backgroundColor: 'red',
            },
        },
    },
    spanClass: {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'red',
    },
} ) );

export default useStyles;
