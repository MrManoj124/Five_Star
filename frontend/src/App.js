import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginForm from './components/LoginForm';
import './App.css';

function App(){
  return (
    <Router>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;

