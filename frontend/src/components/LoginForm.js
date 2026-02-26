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
}