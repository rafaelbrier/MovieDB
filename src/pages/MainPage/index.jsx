import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import Latest from '../Latest';
import Popular from '../Popular';
import TopRated from '../TopRated';
import Trending from '../Trending';
import useStyles from './styles';
import TabItem from './TabItem';
import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';
import SearchInput from '../../components/SearchInput';
import Favorites from '../Favorites';

function a11yProps ( index ) {
    return {
        id: `scrollable-prevent-tab-${ index }`,
        'aria-controls': `scrollable-prevent-tabpanel-${ index }`,
    };
}

const MainPage = () => {
    const styles = useStyles();
    const [ value, setValue ] = useState( 0 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    return (
        <>
            <div className={ styles.pageHeader }>
                <h1 className={ styles.pageTitle }>Movies DB</h1>
                <Button className={ styles.loginButton }>Login</Button>
                <SearchInput />
            </div>

            <div className={ styles.tabs }>
                <StyledTabs value={ value } onChange={ handleChange } >
                    <StyledTab label="Trending" { ...a11yProps( 0 ) } />
                    <StyledTab label="Popular" { ...a11yProps( 1 ) } />
                    <StyledTab label="Top Rated" { ...a11yProps( 2 ) } />
                    <StyledTab label="Favorites" { ...a11yProps( 3 ) } />
                </StyledTabs>
                <Typography className={ styles.padding } />
                <TabItem value={ value } index={ 0 }>
                    <Trending />
                </TabItem>
                <TabItem value={ value } index={ 1 }>
                    <Popular />
                </TabItem>
                <TabItem value={ value } index={ 2 }>
                    <TopRated />
                </TabItem>
                <TabItem value={ value } index={ 3 }>
                    <Favorites />
                </TabItem>
            </div>
        </>
    );
}

export default MainPage;
