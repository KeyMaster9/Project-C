import React from 'react';

const AbstractMessage = ({ message, className }) => {
    return <div className="MessageContainer">
        <div className={`Message ${className ? className: ''}`}>{message.split(`\n`).map((str, i) => <p key={i} >{str.trim()}</p>)}</div>
    </div>
}

export default AbstractMessage;