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

                <div className="detail-card"></div>
                    <div className="detail-header">
                        <div className="detail-icon-wrapper icon-food">
                            <Package size={48} />
                        </div>
                        <h1>Food and Technology</h1>
                        <p>Explore the intersection of culinary arts and modern technology</p>
                    </div>
    );
}