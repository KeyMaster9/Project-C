import React, { useEffect, useRef } from 'react';
import Info from './ChatItems/Messages/Info';
import Question from './ChatItems/Messages/Question';
import Response from './ChatItems/Messages/Response';

const Chat = ({ messages = [<Info message='Info message' />, <Question message='Question message?' />, <Response message='RESPONSE!' />] }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return <div className="Chat">
        {messages.map((message, i) => {
            return message;
        })}
        <div ref={bottomRef} />
    </div>
}

export default Chat;