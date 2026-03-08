import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Calendar } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dob: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

    try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/register`,
                formData
            );

            if (response.data.success) {
                toast.success('Registration successful!');
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <div className="register-icon">
                        <User size={40} />
                    </div>
                    <h1>Create Account</h1>
                    <p>Join us today!</p>
                </div>

                 <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <User className="input-icon" size={20} />
                        <input 
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username..."
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <Mail className="input-icon" size={20} />
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email..."
                            className="input-field"
                            required
                        />
                    </div>

                     <div className="input-group">
                        <Phone className="input-icon" size={20} />
                        <input 
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter Phone number..."
                            className="input-field"
                            required
                        />
                    </div>
                     <div className="input-group">
                        <Lock className="input-icon" size={20} />
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password..."
                            className="input-field"
                            required
                        />
                    </div>
                     <div className="input-group">
                        <Lock className="input-icon" size={20} />
                        <input 
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password..."
                            className="input-field"
                            required
                        />
                    </div>
                     <div className="input-group">
                        <Calendar className="input-icon" size={20} />
                        <input 
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="register-button"
                        disabled={loading}
                    >
                    </button>
                                            {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>