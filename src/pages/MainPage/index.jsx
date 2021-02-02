import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Popular from '../Popular';
import TopRated from '../TopRated';
import Trending from '../Trending';
import useStyles from './styles';

import { StyledTab as ST2, StyledTabs as STs2 } from './TabManager';

import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';

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

            <div className={ styles.tabs }>
                <STs2 value={ value } onChange={ handleChange } >
                    <ST2 label="Trending">
                        <Trending />
                    </ST2>
                    <ST2 label="Popular" >
                        <Popular />
                    </ST2>
                    <ST2 label="Top Rated" >
                        <TopRated />
                    </ST2>
                </STs2>
                <Typography className={ styles.padding } />
            </div>
        </>
    );
}

export default MainPage;
