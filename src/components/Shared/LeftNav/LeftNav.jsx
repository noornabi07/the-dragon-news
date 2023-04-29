import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideNews from './SideNews/SideNews';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <h3 className='font-bold bg-secondary rounded text-center my-3 py-1 text-white'>National News</h3>
            {
                categories.map(category => 
                <p key={category.id}>
                    <Link to={`./category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </p>
                )
            }
            <SideNews></SideNews>
        </div>
    );
};

export default LeftNav;