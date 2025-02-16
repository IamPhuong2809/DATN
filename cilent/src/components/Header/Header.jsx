import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_Horizon.png'; // Đảm bảo đường dẫn đúng

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header-logo" />
                    <span>HORIZON</span>
                </Link>
            </div>

            <ul className="nav-menu">
                <button className="nav-item">CONTROL MODE</button>
                <button className="nav-item">TEACHNOLOGIES</button>
                <button className="nav-item-dropdown">CONTACT US ▼</button>
                <button className="nav-item-dropdown">ABOUT US ▼</button>
                <button className="login-item" onClick={() => navigate('/')}>LOGIN</button>
            </ul>
        </header>
    );
}

export default Header;