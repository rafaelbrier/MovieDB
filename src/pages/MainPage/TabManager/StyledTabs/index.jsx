import { Tabs, withStyles } from '@material-ui/core';

const StyledTabs = withStyles( {
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
} )( ( ( props ) => <Tabs { ...props } TabIndicatorProps={ { children: <span /> } } /> ) );


export default StyledTabs;
