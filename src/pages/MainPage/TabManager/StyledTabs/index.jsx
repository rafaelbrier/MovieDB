import { Tabs, withStyles } from '@material-ui/core';
import useStyles from './styles';

// const StyledTabs = ( props ) => {
//     const styles = useStyles();

//     const indicator = {
//         indicator: styles.spanClass
//     }

//     return (
//         <Tabs className={ styles.tabMenu } { ...props } TabIndicatorProps={ { children: <span classes={ { indicator: styles.spanClass } } /> } } />
//     );
// }

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
} )( ( ( props ) => <Tabs { ...props } TabIndicatorProps={ { children: <span /> } } /> )
);

export default StyledTabs;
