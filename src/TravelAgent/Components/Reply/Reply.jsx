import React, { useCallback, useState } from 'react';
import Select from './Responses/Select';
import Send from './Send/Send';

const Reply = ({ question, onSend: submit }) => {
    const [value, setValue] = useState();
    const onSubmit = useCallback(() => {
        if (value && question?.responses.includes(value)) {
            submit(value, question);
        }
        setValue('');
    }, [submit, value, question])

    return <div className="Reply">
        <Select value={value} setValue={setValue} options={question?.responses} />
        <Send onSubmit={onSubmit} />
    </div>
}

export default Reply;