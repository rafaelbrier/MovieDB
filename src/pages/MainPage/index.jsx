import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Popular from '../Popular';
import TopRated from '../TopRated';
import Trending from '../Trending';
import { StyledTab, StyledTabs } from './TabManager';
import { useStyles } from './styles';

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
                <input className={ styles.searchBox } name='searchBox' placeholder='Buscar filme' />
            </div>

            <div className={ styles.tabs }>
                <StyledTabs value={ value } onChange={ handleChange } >
                    <StyledTab label="Trending">
                        <Trending />
                    </StyledTab>
                    <StyledTab label="Popular" >
                        <Popular />
                    </StyledTab>
                    <StyledTab label="Top Rated" >
                        <TopRated />
                    </StyledTab>
                </StyledTabs>
                <Typography className={ styles.padding } />
            </div>
        </>
    );
}

export default MainPage;
