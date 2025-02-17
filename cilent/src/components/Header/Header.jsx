import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_Horizon.png'; // Đảm bảo đường dẫn đúng

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // Kiểm tra thông tin user trong localStorage khi component mount
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

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
                <button className="nav-item-dropdown">
                    CONTACT US ▼
                    <div className="dropdown-content">
                        <a 
                            href="https://byvn.net/4sXq" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="dropdown-item"
                            data-tooltip="1 Vo Van Ngan, Linh Chieu, HCM"
                        >
                            ADDRESS
                        </a>
                        <a 
                            className="dropdown-item"
                            data-tooltip="0123456789"
                        >
                            PHONE
                        </a>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nminhphuong2809@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                            data-tooltip="nminhphuong2809@gmail.com"
                        >
                            EMAIL
                        </a>
                    </div>
                </button>
                <button className="nav-item-dropdown">
                    ABOUT US ▼
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">INTRODUCTION</a>
                        <a href="#" className="dropdown-item">MEMBERS</a>
                        <a href="#" className="dropdown-item">ACHIEVEMENTS</a>
                    </div>
                </button>
                {user ? (
                    <div className="avatar-container">
                        <img 
                            src={user.avatar || 'default-avatar.png'} 
                            alt="User Avatar" 
                            className="user-avatar"
                            onClick={() => setShowDropdown(!showDropdown)} 
                        />
                        <div className="avatar-dropdown">
                            <div className="user-info">
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                            </div>
                            <button onClick={handleLogout}>Đăng xuất</button>
                        </div>
                    </div>
                ) : (
                    <button className="login-item" onClick={() => navigate('/login')}>LOGIN</button>
                )}
            </ul>
        </header>
    );
}

export default Header;