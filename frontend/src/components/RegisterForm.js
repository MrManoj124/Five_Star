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