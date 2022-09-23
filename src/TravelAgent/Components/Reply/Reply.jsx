import React, { useCallback, useState } from 'react';
import Select from './Responses/Select';
import Buttons from './Responses/Buttons'
import Send from './Send/Send';

const Reply = ({ question, onSend: submit, action }) => {
    const [value, setValue] = useState();
    const onSubmit = useCallback(() => {
        if (value && question?.responses.includes(value)) {
            submit(value, question);
        }
        setValue('');
    }, [submit, value, question])

    const controlledAction = useCallback(() => {
        if(action && value===question?.responses[action[0]]) {
            var func = action[1];
            func();
        }
        return;
    }, [value, action, question])
    

    const responseProps = { value: value, setValue: setValue, options: question?.responses};

  //  console.log(question, 'question')
   // console.log(question.responses, 'responses')
    return <div className="Reply">
        {question.responses.length >= 3 ? <Select {...responseProps} /> : <Buttons {...responseProps} />}
        <Send onSubmit={onSubmit} isDisabled={!value} action={controlledAction}/>
    </div>
}

export default Reply;