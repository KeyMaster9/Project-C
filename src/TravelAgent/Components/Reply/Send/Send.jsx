import React from 'react';
import { AiOutlineSend } from 'react-icons/ai'

const Send = ({ onSubmit }) => {
    return <div
        className='Send'
        style={{ margin: '0 auto', display: 'block' }}
        onClick={onSubmit}
    >
        <AiOutlineSend style={{ color: 'ghostwhite', fontSize: '1.5rem', height: '100%', margin: '0 auto', display: 'block' }} />
    </div>
}

export default Send;