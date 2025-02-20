import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({ handleButtonClick, logos, tooltips }) => {
    const formatPath = (text) => {
        return text.replace(/\s+/g, '');
    };

    return (
        <nav className='control-menu'>
          {logos.map((logo, index) => (
            <div key={index} className="button-wrapper">
              <Link to={`${window.location.pathname}/${formatPath(tooltips[index])}`}>
                <img 
                  src={logo} 
                  alt={`Button ${index + 1}`} 
                  className="control-button" 
                  onClick={() => handleButtonClick(index + 1)} 
                />
              </Link>
              <span className="tooltip">{tooltips[index]}</span>
            </div>
          ))}
        </nav>
    );
}

export default Menu