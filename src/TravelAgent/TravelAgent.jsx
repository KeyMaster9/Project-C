import React, { useState } from 'react';
import Chat from './Components/Chat/Chat.jsx';
import Question from './Components/Chat/ChatItems/Messages/Question.jsx'
import './TravelAgent.css'
import questions from './config/questions.json'


const TravelAgent = () => {
    const [questionsList, setQuestions] = useState(questions)

    return <div className="TravelAgent">
        <Chat messages={questionsList.map(question => <Question message={question.question} />)} />
    </div>
}


export default TravelAgent;