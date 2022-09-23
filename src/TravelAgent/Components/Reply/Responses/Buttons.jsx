import React from 'react';

const Buttons = ({ value, setValue, options = [] }) => {

    return <div className='Buttons'>
        {options.map(option => <button
            key={option}
            className={value === option ? 'active' : ''}
            onClick={() => setValue(option)}
        >
            {option}
        </button>)}
    </div>

}

export default Buttons;