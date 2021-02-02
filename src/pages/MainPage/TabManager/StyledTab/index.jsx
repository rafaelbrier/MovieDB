import { Tab } from '@material-ui/core';
import useStyles from './styles';

const StyledTab = ( props ) => {
    const styles = useStyles();

    return (
        <Tab className={ styles.tabItem } disableRipple { ...props } />
    );
}

export default StyledTab;
