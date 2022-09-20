import React from 'react';

const Select = ({value, setValue, options = []}) => {

    return <div className='Selection'>
        <select value={value} onChange={e => setValue(e.target.value)} name="resopnse">
            <option value=''>Select...</option>
            {options.map(option=> <option value={option}>{option}</option>)}
        </select>
    </div>

}

export default Select;