import React from 'react';
import AbstractMessage from './ChatItems/AbstractMessage.jsx';
import './Chat.css';


const Chat = ({ messages=[<AbstractMessage message='test message'/>] }) => {
    return <div className="Chat">
        {messages.map(message => message)}
    </div>
}

export default Chat;