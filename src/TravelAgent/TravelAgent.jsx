import React, { useCallback, useEffect, useState, useMemo } from 'react';
import Chat from './Components/Chat/Chat.jsx';
import Question from './Components/Chat/ChatItems/Messages/Question.jsx'
import Info from './Components/Chat/ChatItems/Messages/Info.jsx'
import Response from './Components/Chat/ChatItems/Messages/Response.jsx'
import Reply from './Components/Reply/Reply.jsx';
import searchLocations from './helpers/searchLocations.js';
import questions from './config/questions.json'
import './TravelAgent.css'

const TravelAgent = () => {
    const suggestionResponses = ['Yes!', "Next Please"];

    const [questionQueue, setQuestionQueue] = useState(questions);
    const activeQuestion = useMemo(() => questionQueue[0], [questionQueue]);

    const [resultsFound, setResultsFound] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const suggestion = useMemo(() => suggestions[0], [suggestions]);

    const [replyValues, setReplyValues] = useState({});
    const [chatHistory, setChatHistory] = useState([<Info message="Start of chat" />]);

    const onReply = useCallback((value, question) => {
        if (question?.suggestion) {
            const [, ...rest] = suggestions;
            setSuggestions(rest);
        } else {
            setReplyValues({
                ...replyValues,
                [question.property]: value
            });
            const [, ...rest] = questionQueue;
            setQuestionQueue(rest);
        }
        setChatHistory([...chatHistory, <Response message={value} />]);
    }, [chatHistory, questionQueue, replyValues, setQuestionQueue, setChatHistory, setReplyValues, suggestions])

    useEffect(() => {
        if (activeQuestion) {
            setChatHistory([...chatHistory, <Question message={activeQuestion.question} />])
        }
        // eslint-disable-next-line
    }, [activeQuestion])

    useEffect(() => {
        if (questionQueue.length === 0 && !resultsFound) {
            const results = searchLocations(replyValues).map(location => {
                return {
                    ...location,
                    question: `Would you like to visit ${location.City} - ${location.Country}?`,
                    responses: suggestionResponses
                }
            })
            if(results.length > 0) {
                setSuggestions(results);
                setResultsFound(true);
                setChatHistory([...chatHistory, <Info message={`${results.length} Locations Found!`} />]);
            } else {
                setChatHistory([...chatHistory, <Info message='No holiday locations could be found using your requirements. Try changing your requirements or setting less important requirements to "No Preference"' />]);
                setQuestionQueue(questions);
                setReplyValues({});
            }
        }
        // eslint-disable-next-line
    }, [questionQueue])

    useEffect(() => {
        if(suggestion) {
            setChatHistory([...chatHistory, <Question message={suggestion.question} />])
        }
        // eslint-disable-next-line
    }, [suggestion])

    return <div className="TravelAgent">
        <Chat messages={chatHistory} />
        {activeQuestion && <Reply question={activeQuestion} onSend={onReply} />}
        {suggestion && <Reply question={suggestion} onSend={onReply} />}
    </div>
}

export default TravelAgent;