import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Calendar } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

function RegisterForm() {