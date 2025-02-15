import React, { useState } from 'react';
import './Login.css'; // Nếu có CSS riêng
import logo from '../../assets/images/Logo_Horizon.png';

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
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => handleSubmit(e, 'signIn')}>
                        <div className="header-form">
                            <img src={logo} alt="Logo" className="logo" />
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
                    <div className="overlay">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
