import React from 'react';
import AbstractMessage from '../AbstractMessage';

export default ({ message }) => <AbstractMessage
    message={message}
    styles={{
        float: 'left',
        backgroundColor: '#999',
        borderColor: '#999',
        borderRadius: '1rem 1rem 1rem 0rem',
        color: 'black'
    }}
/>