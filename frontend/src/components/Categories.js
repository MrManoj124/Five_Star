import React from "react";
import { Link } from "react-router-dom";
import { Package, Wrench, Monitor, Heart, Film, ChevronRight } from 'lucide-react';

function Categories(){
    const categories = [
        { 
            name: 'Food and Technology', 
            icon: Package, 
            iconClass: 'icon-food',
            path: '/food-and-technology',
            description: 'Explore food and technology'
        },
        { 
            name: 'Mechanical Items', 
            icon: Wrench, 
            iconClass: 'icon-mechanical',
            path: '/mechanical-items',
            description: 'Explore mechanical items'
        },
        { 
            name: 'Tech Tools', 
            icon: Monitor, 
            iconClass: 'icon-tech',
            path: '/tech-tools',
            description: 'Explore tech tools'
        },
        { 
            name: 'Medical Things', 
            icon: Heart, 
            iconClass: 'icon-medical',
            path: '/medical-things',
            description: 'Explore medical things'
        },
        { 
            name: 'Media Things', 
            icon: Film, 
            iconClass: 'icon-media',
            path: '/media-things',
            description: 'Explore media things'
        }
    ];

    return (
        <div className="categories-container">
            <div className="categories-wrapper">
                <div className="categories-header">
                    <h1>Choose Your Category</h1>
                    <p>Select a category to explore amazing content</p>
                </div>
                
                <div className="categories-grid">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Link 
                                to={category.path} 
                                key={index} 
                                className="category-card"
                            >
                                <div className={`category-icon-wrapper ${category.iconClass}`}>
                                    <Icon size={32} />
                                </div>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                                <div className="category-link">
                                    Learn More <ChevronRight size={20} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}