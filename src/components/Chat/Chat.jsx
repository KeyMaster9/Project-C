import React, { useEffect, useRef } from 'react';
import Info from './ChatItems/Messages/Info';
import Question from './ChatItems/Messages/Question';
import Response from './ChatItems/Messages/Response';

const Chat = ({ messages = [{type: 'Notification', message: 'Info message'},  {type: 'Bot', message: 'Question!'}, {type: 'User', message: 'Response!'}] }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return <div className="Chat">
        {messages.map((msg, i) => {
            const { type, message } = msg;
            switch (type) {
                case 'Notification': return <Info key={i} message={message} />;
                case 'User': return <Response key={i} message={message} />;
                case 'Bot': return <Question key={i} message={message} />;
                default: break;
            } return null;
        })}
        <div ref={bottomRef} />
    </div>
}

export default Chat;