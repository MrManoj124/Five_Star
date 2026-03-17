import React from "react";
import { Link } from "react-router-dom";
import { Package, ArrowLeft } from 'lucide-react';

function FoodAndTechnology(){
    return (
        <div className="detail-container bg-food">
            <div className="detail-wrapper">
                <Link to="/categories" className="back-button">
                    <ArrowLeft size={20} /> Back to Categories
                </Link>
    );
}