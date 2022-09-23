import React, { useCallback, useEffect, useState, useMemo } from 'react';
import Chat from './Components/Chat/Chat.jsx';
import Reply from './Components/Reply/Reply.jsx';
import searchLocations from './helpers/searchLocations.js';
import questions from './config/questions.json'
import './TravelAgent.css'

const suggestionResponses = ['More Information', "Next"];
const locationResponses = ['Thank you', 'Next'];
const endResponses = ['Download Chat Log', 'Look For More Holidays']

const TravelAgent = () => {
    const [isComplete, setIsComplete] = useState(false)

    const [questionQueue, setQuestionQueue] = useState(questions);
    const activeQuestion = useMemo(() => questionQueue[0], [questionQueue]);

    const [resultsFound, setResultsFound] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const suggestion = useMemo(() => suggestions[0], [suggestions]);

    const [replyValues, setReplyValues] = useState({});
    const [chatHistory, setChatHistory] = useState([{ type: 'Notification', message: 'Start of chat' }]);

    const onCompleteReply = useCallback((value) => {
        if (value === endResponses[1]) {
            setIsComplete(false);
            setQuestionQueue(questions);
            setResultsFound(false);
            setSuggestions([]);
            setReplyValues({});
            setChatHistory([{ type: 'Notification', message: 'Start of chat' }]);
        } 
    }, [])

    const downloadChatLog = () => {
        const e = document.createElement('a');
        const file = new Blob(chatHistory.map(msg => `${msg.type}: ${msg.message}\n\n`), { type: 'text/plain' });
        console.log([...chatHistory])
        e.href = URL.createObjectURL(file);
        e.download = "chatlog.txt";
        document.body.appendChild(e);
        e.click();
    }


    const onReply = useCallback((value, question) => {
        if (activeQuestion) {
            setReplyValues({
                ...replyValues,
                [question.property]: value
            });
            const [, ...rest] = questionQueue;
            setQuestionQueue(rest);
        } else {

        }
        setChatHistory([...chatHistory, { type: 'User', message: value }]);
    }, [chatHistory, questionQueue, replyValues, setQuestionQueue, setChatHistory, setReplyValues, activeQuestion])

    const onSuggestionReply = useCallback((value, question) => {
        if (value === suggestionResponses[0]) {
            const [, ...rest] = suggestions;
            const { City, Country, HotelName, HolidayRefence, PricePerPerNight, StarRating } = suggestion;
            setSuggestions([
                {
                    ...suggestion,
                    question: `Details of holiday in: \n 
                ${City ? City + ' - ' + Country : Country}:\n
                Holiday Reference: ${HolidayRefence},\n
                Hotel Name: ${HotelName},\n
                Price Per Night: ${PricePerPerNight},\n
                Star Rating: ${StarRating}`,
                    responses: locationResponses
                },
                ...rest
            ]);
        } else if (value === locationResponses[0]) {
            setSuggestions([]);
            setIsComplete(true);
            setChatHistory([...chatHistory, {type: 'Notification', message: 'End Of Chat'}])

        } else {
            const [, ...rest] = suggestions;
            setSuggestions(rest);
        }
        setChatHistory([...chatHistory, { type: 'User', message: value }]);
    }, [suggestions, suggestion, setSuggestions, setIsComplete, chatHistory, setChatHistory]);

    

    useEffect(() => {
        if (activeQuestion) {
            setChatHistory([...chatHistory, { type: 'Bot', message: activeQuestion.question }])
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
            if (results.length > 0) {
                setSuggestions(results);
                setResultsFound(true);
                setChatHistory([...chatHistory, { type: 'Notification', message: `${results.length} Locations Found!` }]);
            } else {
                setChatHistory([...chatHistory, { type: 'Notification', message: 'No holiday locations could be found using your requirements. Try changing your requirements or setting less important requirements to "No Preference"' }]);
                setQuestionQueue(questions);
                setReplyValues({});
            }
        }
        // eslint-disable-next-line
    }, [questionQueue])

    useEffect(() => {
        if (suggestion) {
            setChatHistory([...chatHistory, { type: 'Bot', message: suggestion.question }])
            console.log(suggestion, 'suggestion')
        }
        // eslint-disable-next-line
    }, [suggestion])

    return <div className="TravelAgent">
        <Chat messages={chatHistory} />
        {activeQuestion && <Reply question={activeQuestion} onSend={onReply} />}
        {suggestion && <Reply question={suggestion} onSend={onSuggestionReply} />}
        {isComplete && <Reply question={{ responses: endResponses }} onSend={onCompleteReply} action={[0, downloadChatLog]}/>}
    </div>
}

export default TravelAgent;