const styles = {
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
    tabItem: ( theme ) => ( {
        root: {
            textTransform: 'none',
            color: '#fff',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem( 15 ),
            marginRight: theme.spacing( 1 ),
            '&:focus': {
                opacity: 1,
            },
        },
    } ),
};

export default styles;
