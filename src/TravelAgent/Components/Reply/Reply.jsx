import React, {useCallback, useState} from 'react';
import Select from './Responses/Select';
import Send from './Send/Send';
import './Reply.css'

const Reply = ({question, onSend: submit}) => {
    const {responses} = question;
    const [value, setValue] = useState();
    
    const onSubmit = useCallback(() => {
        if(value && responses.includes(value)) {
            submit(value, question);
        }
        setValue('');
    }, [submit, value, question, responses])

    return <div className="Reply">
        <Select value={value} setValue={setValue} options={responses} />
        <Send onSubmit={onSubmit} />
    </div>
}

export default Reply;