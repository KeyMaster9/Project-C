import React from 'react';
import './AbstractMessage.css';

const AbstractMessage = ({ message, className, styles }) => {

    const concatClassName = (defaultClassName) => {
        if (className) {
            return [defaultClassName, className].join(' ');
        }
        return defaultClassName;
    }

    return <div className="MessageContainer">
        <div className={concatClassName('Message')} style={styles}>{message}</div>
    </div>
}

export default AbstractMessage;