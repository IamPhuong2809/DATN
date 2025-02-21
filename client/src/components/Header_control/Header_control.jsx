import React, { useState, useEffect } from 'react';
import './Header_control.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Logo_Horizon.png'; // Đảm bảo đường dẫn đúng
import defaultAvatar from '../../assets/images/default-avatar.png';
import { jwtDecode } from 'jwt-decode';

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedUser = jwtDecode(token);
                    const currentTime = Date.now() / 1000;
                    if (decodedUser.exp > currentTime) {
                        setUser(decodedUser);
                    } else {
                        handleLogout();
                    }
                } catch (error) {
                    console.error('Token không hợp lệ:', error);
                    handleLogout();
                }
            }
            setIsLoading(false);
        };
        
        checkAuth();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setShowDropdown(false);
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <div className="logo-container">
                        {isLoading ? (
                            <div className="logo-image-placeholder"></div>
                        ) : (
                            <img src={logo} alt="Logo" className="header-logo" />
                        )}
                        <span>HORIZON</span>
                    </div>
                </Link>
            </div>

            <ul className="nav-menu">
                <button className={`nav-item ${location.pathname === '/AssignTask' ? 'active' : ''}`} onClick={() => navigate('/AssignTask')}>ASSIGN TASKS</button>
                <button className={`nav-item ${location.pathname === '/ControlMobile' ? 'active' : ''}`} onClick={() => navigate('/ControlMobile')}>MOBILE ROBOT</button>
                <button className={`nav-item ${location.pathname === '/6dof' ? 'active' : ''}`} onClick={() => navigate('/6dof')}>6DOF ROBOT</button>
                <button className={`nav-item ${location.pathname === '/StateSystems' ? 'active' : ''}`} onClick={() => navigate('/StateSystems')}>STATE SYSTEMS</button>
            {isLoading ? (
                    <div className="auth-placeholder"></div>
                ) : (
                    <div className="avatar-container">
                        <img 
                            src={user?.avatar || defaultAvatar} 
                            alt="User Avatar" 
                            className="user-avatar"
                            onClick={() => setShowDropdown(!showDropdown)} 
                        />
                        <div className="avatar-dropdown" style={{ display: showDropdown ? 'block' : 'none' }}>
                            <div className="user-info">
                                <span>{user?.name}</span>
                                <span>{user?.email}</span>
                            </div>
                            <button onClick={handleLogout}>Đăng xuất</button>
                        </div>
                    </div>
                )}
            </ul>
        </header>
    );
}

export default Header;