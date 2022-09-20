import React from 'react';
import AbstractMessage from '../AbstractMessage';

export default ({message}) => <AbstractMessage 
    message={message}
    styles={{
        border: 'none',
        margin: '0.5rem auto'
    }}
/>