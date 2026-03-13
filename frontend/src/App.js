import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginForm from './components/LoginForm';
import RegisterForm  from "./components/RegisterForm";
import './App.css';

function App(){
  return (
    <Router>
      <Route path="/" element={<LoginForm />} />

    </Router>
  );
}

export default App;

