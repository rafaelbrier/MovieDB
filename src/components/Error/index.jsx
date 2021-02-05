import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import useStyles from './styles';

const Error = ( { Message } ) => {
    const styles = useStyles();

    return (
        <div className={ styles.root }>
            <SentimentVeryDissatisfiedIcon className={ styles.icon } />
            <h2>{ Message }</h2>
        </div>
    );
}

export default Error;
