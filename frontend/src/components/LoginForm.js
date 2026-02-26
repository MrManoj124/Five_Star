import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {User, Lock} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

function LoginForm(){
    const [formData, setFormdata] = useState({
        username : "",
        password : ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const response = await axios.post(
                `${PROCESS.env.REACT_APP_API_URL}/auth/login`,
                formData
            );

            if(response.data.success){
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                toast.success('Login successful!');
                navigate('/categories');
            }
        }
        catch(error){
            toast.error(error.response?.data?.message || 'Login Failed!')
        }
        finally{
            setLoading(false);
        }
    };

    return(
    <div className="login-container">
        <div className="lodin-card">
            <div className="login-header">
                <div className="login-icon">
                    <User size={40}/>
                </div>
                <h1>Welcome Back</h1>
                <p>Login to continue your journey</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}></form>
        </div>
    </div>
    )
}