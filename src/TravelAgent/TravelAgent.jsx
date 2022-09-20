import React, { useCallback, useEffect, useState, useMemo } from 'react';
import Chat from './Components/Chat/Chat.jsx';
import Question from './Components/Chat/ChatItems/Messages/Question.jsx'
import Info from './Components/Chat/ChatItems/Messages/Info.jsx'
import './TravelAgent.css'
import questions from './config/questions.json'
import Reply from './Components/Reply/Reply'


const TravelAgent = () => {

    const [chatHistory, setChatHistory] = useState([<Info message="Start of chat" />]);

    const [replyValues, setReplyValues] = useState({});

    const [questionQueue, setQuestionQueue] = useState(questions);
    const question = useMemo(() => questionQueue[0], [questionQueue]);

    const onReply = useCallback((value, question) => {
        setReplyValues({
            ...replyValues,
            [question.property]: value
        });
        const [, ...rest] = questionQueue;
        setQuestionQueue(rest)
    })

    useEffect(() => {
        if (question) {
            setChatHistory([...chatHistory, <Question message={question.question} />])
        }
    }, [question])

    return <div className="TravelAgent">
        <Chat messages={chatHistory} />
        {question && <Reply question={question} onSend={onReply} />}
    </div>
}


export default TravelAgent;