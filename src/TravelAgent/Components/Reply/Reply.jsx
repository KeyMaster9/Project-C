import React, { useCallback, useState } from 'react';
import Select from './Responses/Select';
import Buttons from './Responses/Buttons'
import Send from './Send/Send';

const Reply = ({ question, onSend: submit }) => {
    const [value, setValue] = useState();
    const onSubmit = useCallback(() => {
        if (value && question?.responses.includes(value)) {
            submit(value, question);
        }
        setValue('');
    }, [submit, value, question])

    const responseProps = { value: value, setValue: setValue, options: question?.responses };

    return <div className="Reply">
        {question.responses.length >= 3 ? <Select {...responseProps} /> : <Buttons {...responseProps} />}
        <Send onSubmit={onSubmit} isDisabled={!value} />
    </div>
}

export default Reply;