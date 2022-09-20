import React from 'react';

const AbstractMessage = ({ message, className }) => {

    const concatClassName = (defaultClassName) => {
        if (className) {
            return [defaultClassName, className].join(' ');
        }
        return defaultClassName;
    }

    return <div className="MessageContainer">
        <div className={concatClassName('Message')}>{message}</div>
    </div>
}

export default AbstractMessage;