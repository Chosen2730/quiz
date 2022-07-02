import React, { useState } from 'react'

const Options = ({i,option,ans,options,index,q,subject, checkAnswer}) => {
    const [select, setSelect] = useState(false);
    return (
        <p
            key={i}
            className='que_p '
            onClick={() => {
                setSelect(true)
                checkAnswer(ans, option, options[i], q, index + 1, subject);
            }}
            
        >
            {options[i]}. {option}
        </p>
    );
}

export default Options;