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