import React from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const SearchInput = ( { onChange } ) => {
    const styles = useStyles();

    return (
        <div className={ styles.searchBox }>
            <div className={ styles.searchIcon }>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Buscar filme'
                onChange={ onChange }
                classes={ {
                    root: styles.inputRoot,
                    input: styles.inputInput,
                } }
                inputProps={ { 'aria-label': 'search' } }
            />
        </div>
    );
}

export default SearchInput;
