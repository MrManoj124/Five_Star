import React from "react";
import { Link } from "react-router-dom";
import { Package, ArrowLeft } from 'lucide-react';

function FoodAndTechnology() {
    return (
        <div className="detail-container bg-food">
            <div className="detail-wrapper">
                <Link to="/categories" className="back-button">
                    <ArrowLeft size={20} /> Back to Categories
                </Link>
                
                <div className="detail-card">
                    <div className="detail-header">
                        <div className="detail-icon-wrapper icon-food">
                            <Package size={48} />
                        </div>
                        <h1>Food and Technology</h1>
                        <p>Explore the intersection of culinary arts and modern technology</p>
                    </div>
                    
                    <div className="detail-grid">
                        <div className="detail-item">
                            <h3>Smart Kitchen Appliances</h3>
                            <p>Discover the latest in smart cooking technology</p>
                        </div>
                        <div className="detail-item">
                            <h3>Food Delivery Apps</h3>
                            <p>Revolutionary platforms changing how we order food</p>
                        </div>
                        <div className="detail-item">
                            <h3>Recipe Management</h3>
                            <p>Digital solutions for organizing your favorite recipes</p>
                        </div>
                        <div className="detail-item">
                            <h3>Nutrition Tracking</h3>
                            <p>Apps and tools for monitoring your dietary intake</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodAndTechnology;