import { Tab, Tabs, withStyles } from '@material-ui/core';
import styles from './styles';

export const StyledTabs = withStyles( styles.tabMenu )(
    ( ( props ) => <Tabs { ...props } TabIndicatorProps={ { children: <span /> } } /> )
);


export const StyledTab = withStyles( ( theme ) => ( styles.tabItem( theme ) ) )(
    ( props ) => <Tab disableRipple { ...props } />
);
