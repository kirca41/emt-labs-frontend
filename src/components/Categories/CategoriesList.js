import React from 'react';

const CategoriesList = ({ categories}) => {

    const renderCategories = () => {
        return categories.map(cat => {
            return (
                <li class="list-group-item">
                    <span>{cat}</span>
                </li>
            );
        });
    }
    
    return (
        <div className="container mt-5">
            <h1>Categories</h1>
            <ul className="list-group">
                {renderCategories()}
            </ul>
        </div>
    );
}

export default CategoriesList;