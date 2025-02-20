import React from 'react'
import './Menu.css'

const Menu = ({ handleButtonClick, logos }) => {
    return (
        <nav className='control-menu'>
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Button ${index + 1}`} 
              className="control-button" 
              onClick={() => handleButtonClick(index + 1)} 
            />
          ))}
        </nav>
      );
}

export default Menu