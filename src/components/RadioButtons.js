import React, { useState } from 'react';
import classes from './RadioButtons.module.css';

const RadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    }

  return (
    <div className={classes.radio}>
        <label> 
            <input type='radio' 
                id='filter' 
                value='option1'
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
            />Filter
        </label>
        <label> 
        <input type='radio' 
            id='search' 
            value='option2'
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
        />Search
        </label>    
    </div>
  )
}

export default RadioButtons;