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
    ]
}