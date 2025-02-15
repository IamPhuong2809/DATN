import React, { useState } from 'react';
import './Login.css'; // Nếu có CSS riêng
import Logo_Horizon from '../../assets/images/Logo_Horizon.png';
import Logo_UTE from '../../assets/images/Logo_UTE.png';
import Logo_ACIS from '../../assets/images/Logo_ACIS.png';
import Robot from '../../assets/images/Robot.png';

const Login = () => {
    const [formData, setFormData] = useState({
        signUp: {
            name: '',
            email: '',
            password: ''
        },
        signIn: {
            email: '',
            password: ''
        }
    });

    const handleInputChange = (form, field, value) => {
        setFormData(prev => ({
            ...prev,
            [form]: {
                ...prev[form],
                [field]: value
            }
        }));
    };

    const handleSubmit = (e, type) => {
        e.preventDefault();
        // Xử lý đăng nhập/đăng ký ở đây
        console.log(`${type} form submitted:`, formData[type]);
    };

    return (
        <div>
            <div className="container">
                <div className="logo-container">
                    <img src={Logo_UTE} alt="Logo" className="logo-small" />
                    <img src={Logo_ACIS} alt="Logo" className="logo-small second" />
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => handleSubmit(e, 'signIn')}>
                        <div className="header-form">
                            <img src={Logo_Horizon} alt="Logo" className="logo" />
                            <h1>Sign in</h1>
                        </div>
                        <div class="form-control">
                            <input 
                                type="email" 
                                placeholder="" 
                                value={formData.signIn.email}
                                onChange={(e) => handleInputChange('signIn', 'email', e.target.value)}
                            />
                            <label>Email</label>
                        </div>
                        <div class="form-control">
                            <input 
                            type="password" 
                            placeholder=""
                            value={formData.signIn.password}
                                onChange={(e) => handleInputChange('signIn', 'password', e.target.value)}
                            />
                            <label>Password</label>
                        </div>

                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <img src={Robot} alt="Robot" className="robot" />
                </div>
            </div>
        </div>
    );
};

export default Login;
