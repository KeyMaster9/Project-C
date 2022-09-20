import React from 'react';
import AbstractMessage from '../AbstractMessage';

export default ({ message }) => <AbstractMessage
    message={message}
    styles={{
        float: 'right',
        backgroundColor: '#179CDD',
        borderColor: '#179CDD',
        borderRadius: '1rem 1rem 0rem 1rem',
        color: 'ghostwhite'
    }}
/>