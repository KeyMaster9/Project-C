import React, { useCallback, useEffect, useState, useMemo } from 'react';

import Chat from './Components/Chat/Chat.jsx';
import Question from './Components/Chat/ChatItems/Messages/Question.jsx'
import Info from './Components/Chat/ChatItems/Messages/Info.jsx'
import Response from './Components/Chat/ChatItems/Messages/Response.jsx'
import Reply from './Components/Reply/Reply.jsx';

import questions from './config/questions.json'
import './TravelAgent.css'

const TravelAgent = () => {
    const [questionQueue, setQuestionQueue] = useState(questions);
    const activeQuestion = useMemo(() => questionQueue[0], [questionQueue]);

    const [replyValues, setReplyValues] = useState({});
    const [chatHistory, setChatHistory] = useState([<Info message="Start of chat" />]);

    const onReply = useCallback((value, question) => {
        setReplyValues({
            ...replyValues,
            [question.property]: value
        });
        const [, ...rest] = questionQueue;
        setQuestionQueue(rest);
        setChatHistory([...chatHistory, <Response message={value} />]);
    }, [chatHistory, questionQueue, replyValues, setQuestionQueue, setChatHistory, setReplyValues])

    useEffect(() => {
        if (activeQuestion) {
            setChatHistory([...chatHistory, <Question message={activeQuestion.question} />])
        }
        // eslint-disable-next-line
    }, [activeQuestion])

    return <div className="TravelAgent">
        <Chat messages={chatHistory} />
        {activeQuestion && <Reply question={activeQuestion} onSend={onReply} />}
    </div>
}

export default TravelAgent;