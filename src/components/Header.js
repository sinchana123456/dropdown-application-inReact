import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <h1>Columns mapping</h1>
        <span>
            <button className='button1'>Back</button>
            <button className='button2'>Save</button>
        </span>
      </header>
  )
}

export default Header;