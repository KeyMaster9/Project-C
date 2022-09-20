import React from 'react';
import Info from './ChatItems/Messages/Info';
import Question from './ChatItems/Messages/Question';
import Response from './ChatItems/Messages/Response';
import './Chat.css';


const Chat = ({ messages = [<Info message='Info message' />, <Question message='Question message?' />, <Response message='RESPONSE!' />] }) => {
    return <div className="Chat">
        {messages.map(message => message)}
    </div>
}

export default Chat;